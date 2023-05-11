import React from 'react';
import { WalletSettingsContainer } from 'containers/WalletSettingsContainer'

const WalletSettingsPage = () => {

    console.log('WalletSettingsPage')

    return (
        <div className='wallet-settings-wrapper'>
            <WalletSettingsContainer />
        </div>
    )   
}

export { WalletSettingsPage }