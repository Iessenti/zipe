import React from 'react'
import { Toggle } from 'rsuite';
import { RollingCurve } from 'shared/icons'
import RussianFlag from 'assets/images/russian-flag.png'

const ExitWalletSettings = () => (
    <div className='exit'>
        <div className='toggle'>
            <Toggle style={{background: '#567BFF'}}/>
        </div>


        <span className='title'>
            Подтверждение входа
        </span>

        <span className='desc'>
            Настройте вход в кошелёк через подтверждение личности
        </span>

        <div className='input-container'>
            <span className='input-additional'>Подтверждать через</span>
            <div className='wallet-settings-form space rotated'>
                Код из SMS
                <RollingCurve/>
            </div>
        </div>

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

export { ExitWalletSettings }