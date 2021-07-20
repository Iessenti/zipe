import React from 'react';

import 'assets/sass/wallet.sass';

import { MiniProfile } from 'components/MiniProfile';
import { MyFinance } from 'components/MyFinance';
import { ActiveOrders } from 'components/ActiveOrders';
import { Stories } from 'components/Stories';
import { WalletOperations } from 'components/WalletOperations';

const WalletContainer = () => {

    console.log('wallet')

    return (
        <div className='wallet'>
            
            <div className='left-side'>
                <MiniProfile/>
                <MyFinance />
                <ActiveOrders />
            </div>

            <div className='right-side'>
                <Stories />
                <WalletOperations />
            </div>

        </div>
    )
}

export { WalletContainer }