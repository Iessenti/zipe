import React, { useState } from 'react';

import 'assets/sass/createOrder/orderDescription.sass';


const OrderDescriptionTab = () => {

    const [form, setForm] = useState({
        title: '', desc: ''
    }) 
    
    const [files, setFiles] = useState<File | null>(null)   

    const filesHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFiles(e.target.files[0])
        console.log(files)
        console.log(e.target.files)
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
                            onChange={ (e) => setForm({...form, title: e.target.value}) }
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

                </div>
            </div>


            <button type='button'>Продолжить</button>
        </div>
    )
}

export { OrderDescriptionTab }