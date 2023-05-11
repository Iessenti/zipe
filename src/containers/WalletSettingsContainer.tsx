import React from 'react'
import 'assets/sass/wallet-settings.sass'
import { NotificationsWalletSettings, ConfirmingWalletSettings, ExitWalletSettings } from 'components/WalletSettingsComponents'

const WalletSettingsContainer = () => {
    console.log('WalletSettingsContainer')

    return (
        <div className='wallet-settings'>
            
            <NotificationsWalletSettings/>

            <ConfirmingWalletSettings/>

            <ExitWalletSettings/>

        </div>
    )
}

export { WalletSettingsContainer }