import React from 'react'
import 'assets/sass/wallet-settings.sass'
import { Toggle } from 'rsuite';

const WalletSettingsContainer = () => {
    console.log('WalletSettingsContainer')

    return (
        <div className='wallet-settings'>
            
            <div className='notifications'>
                
                <div className='toggle'>
                    <Toggle />
                </div>

                <span className='title'>
                    Оповещения об операциях
                </span>

                <span className='desc'>
                    Если со счёта произойдёт оплата заказа или другие операции, вы получите SMS-уведомление. Стоимость — 49₽/мес.
                </span>
                
                <a>Подробнее про условия</a>

                <div className='wallet-settings-form'>
                    <input 
                        type='text' 
                        placeholder='+7 (999) ***-**-99'
                    />
                </div>

            </div>

            <div className='confirming'>
                <div className='toggle'>
                    <Toggle />
                </div>

                <span className='title'>
                    Автоматический выход из кошелька
                </span>

                <span className='desc'>
                    При отсутствии действий выйти из кошелька через:
                </span>
                
            </div>

            <div className='exit'>
                <div className='toggle'>
                    <Toggle />
                </div>


                <span className='title'>
                    Подтверждение входа
                </span>

                <span className='desc'>
                    Настройте вход в кошелёк через подтверждение личности
                </span>
                
            </div>

        </div>
    )
}

export { WalletSettingsContainer }