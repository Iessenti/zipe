import React from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { RootState } from 'store/reducers';
import 'assets/sass/wallet.sass';

import { MiniProfile } from 'components/MiniProfile';
import { MyFinance } from 'components/MyFinance';
import { ActiveOrders } from 'components/ActiveOrders';
import { Stories } from 'components/Stories';
import { WalletOperations } from 'components/WalletOperations';
import { StoryModal  } from 'components/StoryModal'
import { BillActions } from 'components/BillActions'

const WalletContainer = () => {

    const storyInstance = useSelector((state: RootState) => state.wallet);

    return (
        <div className='wallet'>
            
            <div className='left-side'>
                <MiniProfile/>
                <MyFinance />
                <ActiveOrders />
            </div>

            <div className='right-side'>

                <CSSTransition
                    in={storyInstance && storyInstance.isBillActionsOpened || false}
                    classNames='story-transition'
                    timeout={200}
                    unmountOnExit
                >
                    <BillActions/>
                </CSSTransition>

                <CSSTransition
                    in={storyInstance && !storyInstance.isBillActionsOpened}
                    classNames='story-transition'
                    timeout={200}
                    unmountOnExit
                >
                    <Stories/>
                </CSSTransition>

                <WalletOperations />

            </div>
                
            {
                storyInstance 
                && 
                storyInstance.isStoryOpened
                &&
                <StoryModal />
            }
            
        </div>
    )
}

export { WalletContainer }