import React from 'react'
import { Toggle } from 'rsuite';
import { RollingCurve } from 'shared/icons'

const ConfirmingWalletSettings = () => (

    <div className='confirming'>
        <div className='toggle'>
            <Toggle style={{background: '#567BFF'}}/>
        </div>

        <span className='title'>
            Автоматический выход из кошелька
        </span>

        <span className='desc'>
            При отсутствии действий выйти из кошелька через:
        </span>
        
        <div className='input-container'>
            <span className='input-additional'>Выберите период</span>
            <div className='wallet-settings-form space rotated'>
                5 минут
                <RollingCurve/>
            </div>
        </div>

    </div>
)

export { ConfirmingWalletSettings }