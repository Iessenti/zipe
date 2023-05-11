import React from 'react'
import { useDispatch } from 'react-redux';

import { WalletActionTypes } from 'store/types/wallet';
import 'assets/sass/billActions.sass'

import FlyingCash from 'assets/images/FlyingCash.png'
import LockIcon from 'assets/images/LockIcon.png'
import GearIcon from 'assets/images/GearIcon.png'
import PenIcon from 'assets/images/PenIcon.png'

const BillActions = () => {

    const changeBillActionsState = (value: boolean) => ({type: WalletActionTypes.TOGGLE_BILL_ACTIONS_STATE, payload: value});
    const dispatch = useDispatch();

    let x: number = 0;
    document.body.addEventListener('click', e => {

            const target = e.target as HTMLElement
            const menu = document.querySelector('.bill-actions-container') as HTMLElement;
            if (menu !== null) {
                const itsMenu = (target === menu) || menu.contains(target);
                console.log(itsMenu, x)
                x += 1;
                if (!itsMenu && (x>1) ) {
                    dispatch(changeBillActionsState(false))
                    x = 0
                }
            }
    })



    return (
        <div className='bill-actions-container'> 
            <div>
                <div className='icon' style={{background: '#EBF0EE'}}><img src={FlyingCash} alt='icon'/></div>
                <span>Пополнить счёт</span>
            </div>

            <div>
                <div className='icon' style={{background: '#F8F7EB'}}><img src={LockIcon} alt='icon'/></div>
                <span>Заблокировать счёт</span>
            </div>

            <div>
                <div className='icon' style={{background: '#E9EFF3'}}><img src={GearIcon} alt='icon'/></div>
                <span>Настроить счёт</span>
            </div>

            <div>
                <div className='icon' style={{background: '#F0F1F3'}}><img src={PenIcon} alt='icon'/></div>
                <span>Переименовать счёт</span>
            </div>
        </div>
    )
}

export {BillActions}