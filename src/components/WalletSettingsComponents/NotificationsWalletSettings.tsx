import React from 'react'
import { Toggle } from 'rsuite';
import RussianFlag from 'assets/images/russian-flag.png'

const NotificationsWalletSettings = () => (

    <div className='notifications'>
                    
        <div className='toggle'>
            <Toggle style={{background: '#567BFF'}}/>
        </div>

        <span className='title'>
            Оповещения об операциях
        </span>

        <span className='desc'>
            Если со счёта произойдёт оплата заказа или другие операции, вы получите SMS-уведомление. Стоимость — 49₽/мес.
        </span>

        <a>Подробнее про условия</a>

        <div className='input-container'>
            <div className='wallet-settings-form'>
                <img src={RussianFlag} alt='russian' className='icon'/>
                <input 
                    type='text' 
                    placeholder='+7 (999) ***-**-99'
                />
            </div>

            <span className='input-additional'>На данный номер придёт SMS-код для подтверждения</span>
        </div>
    </div>
)

export {NotificationsWalletSettings}