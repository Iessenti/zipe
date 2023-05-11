import React, { useState, useCallback, useRef } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import {NativeTypes} from 'react-dnd-html5-backend';
import {useDrop, DropTargetMonitor} from 'react-dnd';

import { CSSTransition } from 'react-transition-group';

import { useDispatch } from 'react-redux';
import { OrderUIActionTypes } from 'store/types/orderUI';

import 'assets/sass/createOrder/orderDescription.sass';

import {FilledCheckMark, FileUploadIcon, CloseIcon} from 'shared/icons'

const OrderDescriptionTab = () => {

    const changeActiveStep = (value: number) => ({type: OrderUIActionTypes.CHANGE_STEP, payload: value })

    const dispatch = useDispatch();

    const hiddenFileInput = useRef<HTMLInputElement>(null);

    const [form, setForm] = useState({
        title: '', desc: ''
    }) 

    const [files, setFiles] = useState<File[]>([])   
    const [hoveredFile, setHoveredFile] = useState<string | null>(null)

    const addFiles = useCallback((chosenFiles: File[]) => {
        const uploadedFileNames = files.length ? files.map(file => file.name) : []
        const filesToUpload: File[] = chosenFiles.filter(file => !uploadedFileNames.includes(file.name));
        setFiles([...filesToUpload, ...files]);
    }, [files, setFiles])

    const handleFileDrop = useCallback((item) => {
        if (item) addFiles(item.files);
    }, [addFiles]);

    const [{canDrop, isOver}, drop] = useDrop(
        () => ({
            accept: [NativeTypes.FILE],
            drop(item: { files: any[] }) {
                if (handleFileDrop) {
                handleFileDrop(item);
                }
            },
            collect: (monitor: DropTargetMonitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        }),
        [handleFileDrop],
    );

    const filesHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) addFiles(Array.prototype.slice.call(e.target.files));
    }

    const handleUploadClick = () => {
        if (hiddenFileInput.current !== null && files.length < 3) hiddenFileInput.current.click();
    }

    const handleFileHover = (fileName: string, action: string) => {
        if (hoveredFile !== fileName && action === 'show') {
            setHoveredFile(fileName);
        } else if (hoveredFile === fileName && action === 'hide') {
            setHoveredFile(null)
        }
    }

    const fileNameHandler = (fileName: string) => {
        let transformedName = fileName;
        if (fileName.length > 36) {
            const fileExtension = transformedName.split('.')[transformedName.split('.').length - 1];
            const separatedFileName = transformedName.replace(`.${fileExtension}`, '');
            transformedName = `${separatedFileName.slice(0, 33)}...${fileExtension}`;
        }
        return transformedName;
    }

    const removeFile = (fileName: string) => {
        setFiles(files.filter(file => file.name !== fileName));
    }

    const isActive = canDrop && isOver;
    let dropBlockClassName = "file-loader--input-place";
    let iconColor = '#567BFF';

    if (files && files.length >= 3) {
        dropBlockClassName += ' disabled';
        iconColor = '#D0DAFF';
    }
    if (isActive) dropBlockClassName += ' file-over';

    return (
        <div className="order-description">

            <div className="desciption-main">

                <div className="desciption-form">
                    <span>Название задачи</span>

                    <div className='desciption-form--title-input'>
                        <input 
                            name='title' 
                            type='text' 
                            placeholder='Например, «Логотип для театра»' 
                            maxLength={55}
                            value={form.title} 
                            onChange={ (e) => setForm({...form, title: e.target.value}) }
                        />
                        <span>{form.title.length}/55</span>
                    </div>

                    <span>Описание задачи</span>

                    <div className='desciption-form--desc-input'>
                        
                        <textarea 
                            name='desc' 
                            placeholder='Расскажите о том, что хотите получить — вплоть до мелочей.' 
                            maxLength={5000}
                            value={form.desc} 
                            onChange={ (e) => setForm({...form, [e.target.name]: e.target.value})}
                        >
                            <PerfectScrollbar className='scrollbar-container ps'>0</PerfectScrollbar>
                        </textarea>
                        
                        <span>{form.desc.length}/5000</span>
                    </div>
                </div>
                
                <div className="file-loader">
                    <div className={dropBlockClassName} onClick={handleUploadClick} role='presentation' ref={drop}>

                        <div className="file-loader--input-place--info">
                            <FileUploadIcon iconProperty={iconColor}/>
                            <div className="title">Загрузите файлы</div>
                            <span className="desc">или перетяните их сюда</span>
                        </div>

                        <input 
                            type="file" 
                            name="file" 
                            multiple 
                            onChange={ e => filesHandler(e)} 
                            style={{display: 'none'}}
                            ref={hiddenFileInput}
                        />
                    </div>
                    {
                        files.length > 0
                        &&
                        <div className="file-loader--saved-files">
                            {files.map(item => (
                                <div 
                                    className="file-loader--saved-files--element"
                                    onMouseEnter={() => handleFileHover(item.name, 'show')}
                                    onMouseLeave={() => handleFileHover(item.name, 'hide')}
                                >
                                    <div className="file-loader--saved-files--element--icon">
                                        <FilledCheckMark/>
                                    </div>
                                    {fileNameHandler(item.name)}
                                    <CSSTransition 
                                        timeout={100}
                                        in={hoveredFile === item.name}
                                        classNames={{
                                            appear: 'file-loader--saved-files--element__close appear',
                                            appearActive: 'file-loader--saved-files--element__close appear-active',
                                            appearDone: 'file-loader--saved-files--element__close appear-done',
                                            enter: 'file-loader--saved-files--element__close enter',
                                            enterActive: 'file-loader--saved-files--element__close enter-active',
                                            enterDone: 'file-loader--saved-files--element__close enter-done',
                                            exit: 'file-loader--saved-files--element__close exit',
                                            exitActive: 'file-loader--saved-files--element__close exit-active',
                                            exitDone: 'file-loader--saved-files--element__close exit-done',
                                        }}
                                        onClick={() => removeFile(item.name)}
                                        unmountOnExit
                                    >
                                        <div>
                                            <CloseIcon/>
                                        </div>
                                    </CSSTransition>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
            <button type='button' onClick={ () => dispatch(changeActiveStep(3))}>Продолжить</button>
        </div>
    )
}

export { OrderDescriptionTab }