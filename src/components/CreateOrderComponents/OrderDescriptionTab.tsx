import React, { useState } from 'react';

import 'assets/sass/createOrder/orderDescription.sass';

const OrderDescriptionTab = () => {

    const [form, setForm] = useState({
        title: '', desc: '', fileNames: string []
    })
    const [files, setFiles] = useState( [] as any )

    const filesHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFiles([...files, e.target.files])
        if (e.target.files !== null) {
            setForm({...form, fileNames: e.target.files.map( (elem:any) => elem)})
        }
        
    }

    return (
        <div className="order-description">

            <div className="order-description--main">

                <div className="order-description--main--form">
                    <span>Название задачи</span>

                    <div className='order-description--main--form--title-input'>
                        <input 
                            name='title' 
                            type='text' 
                            placeholder='Например, «Логотип для театра»' 
                            maxLength={50}
                            value={form.title} 
                            onChange={ (e) => setForm({...form, [e.target.name]: e.target.value}) }
                        />
                        <span>{form.title.length}/50</span>
                    </div>

                    <span>Описание задачи</span>

                    <div className='order-description--main--form--desc-input'>
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

                <div className="order-description--main--file-loader">
                    <div className='order-description--main--file-loader--input-place'>
                        <input type="file" name="file" multiple onChange={ e => filesHandler(e)}/>
                    </div>
                    {
                        form.fileNames.map( elem => <span>{elem}</span>)
                    } 
                </div>
            </div>


            <button type='button'>Продолжить</button>
        </div>
    )
}

export { OrderDescriptionTab }