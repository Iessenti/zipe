import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { OrderUIActionTypes } from 'store/types/orderUI';

import 'assets/sass/createOrder/orderDescription.sass';

import {FilledCheckMark, FileUploadIcon} from 'shared/icons'

const OrderDescriptionTab = () => {

    const changeActiveStep = (value: number) => ({type: OrderUIActionTypes.CHANGE_STEP, payload: value })

    const dispatch = useDispatch();

    const hiddenFileInput = React.useRef<HTMLInputElement>(null);

    const [form, setForm] = useState({
        title: '', desc: ''
    }) 

    const [files, setFiles] = useState<File[] | null>(null)   
    const [filenames, setFilenames] = useState<String[]>([])

    const filesHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {

            if (files) {
                setFiles([...Array.prototype.slice.call(e.target.files), ...files])
            } else {
                setFiles([...Array.prototype.slice.call(e.target.files)])
            }

            let names: string[] = [];
            if (Array.prototype.slice.call(e.target.files) && Array.prototype.slice.call(e.target.files).length) {
                names = Array.prototype.slice.call(e.target.files).map( i => i.name)
            }
            setFilenames([...names])
        }
    }

    const handleUploadClick = () => {
        if ( hiddenFileInput.current !== null) {
            hiddenFileInput.current.click();
        }
    }

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
                        />
                        <span>{form.desc.length}/5000</span>
                    </div>
                </div>

                <div className="file-loader">
                    <div className='file-loader--input-place'>

                        <div onClick={handleUploadClick} role='presentation' className='file-loader--input-place--info'>
                            <FileUploadIcon/>
                            <span className='title'>Загрузите файлы</span>
                            <span className='desc'>или перетяните их сюда</span>
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
                        (filenames.length > 0)
                        ?
                        <div className="file-loader--saved-files">
                            {filenames.map( i => <div className="file-loader--saved-files--element"><div className="file-loader--saved-files--element--icon"><FilledCheckMark/></div>{i}</div>)}
                        </div>
                        :
                        false
                    }
                </div>
            </div>



            <button type='button' onClick={ () => dispatch(changeActiveStep(3))}>Продолжить</button>
        </div>
    )
}

export { OrderDescriptionTab }