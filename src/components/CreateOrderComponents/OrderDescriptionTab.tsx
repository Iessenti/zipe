import React from 'react';

import 'assets/sass/createOrder/orderDescription.sass';

const OrderDescriptionTab = () => (
    <div className="order-description">

        <div className="order-description--main">

            <div className="order-description--main--form">
                <span>Название задачи</span>
                <div className='order-description--main--form--title-input'><input type='text' placeholder='Например, «Логотип для театра»'/></div>
                <span>Описание задачи</span>
                <div className='order-description--main--form--desc-input'><textarea>fuck</textarea></div>
            </div>

            <div className="order-description--main--file-loader">
                <input type='text' />
            </div>
        </div>


        <button type='button'>Продолжить</button>
    </div>
)

export { OrderDescriptionTab }