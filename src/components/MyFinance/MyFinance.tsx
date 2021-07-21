import React, { useState } from 'react';

import { Animation } from 'rsuite';

import MiniFullEllipses from 'assets/images/MiniFullEllipses.png';
import { MiniWhitePlus, RollingCurve, SmallGradientWallet, BlockedWalletIcon, QuestionCircleIcon } from '../../shared/icons';

const { Collapse } = Animation;

const MyFinance = () => {
    
    const [opened, setOpened] = useState(false);
    const [showPopup, setShowPopup] = useState(
        {reserved: false, cashback: false}
    );

    const toggleOpen = () => {
        console.log(1)
        if (opened) {
            setOpened(false)
        } else {
            setOpened(true)
        }

    }

    return (
        <div className='my-finance'>
            
            <div className='finance-header'>
                <div className='info'>
                    <span className='title'>Мои финансы</span>
                    {
                        opened
                        ?
                        false
                        :
                        <span className='cash'>101 789 ₽</span>
                    }
                </div>
                <div 
                    className={`icon ${opened ? '' : 'rotated' }`} 
                    onClick={ () => toggleOpen()} 
                    role='presentation'
                >
                    <RollingCurve />
                </div>
            </div>

                <Collapse
                    in={opened}
                    unmountOnExit
                >
                    {(props: any, ref: any) => <div ref={ref} {...props} className='main'>

                        <div className='row'>
                            <div className='bill-icon' style={{background: '#E6EBFF'}}><SmallGradientWallet/></div>
                            <div className='bill-info'>
                                <span className='bill-title'>Счёт ZIPE</span>
                                <span className='bill-desc'>В рублях (RUB)</span>
                            </div>
                            <div className='bill-cash'>101 789<i>,7 ₽</i></div>
                        </div>

                        <div className='row'>
                            <div className='bill-icon' style={{background: '#F6F6FA'}}><BlockedWalletIcon/></div>
                            <div className='bill-info'>
                                <span className='bill-title'>Счёт ZIPE</span>
                                <span className='bill-desc'>
                                    Зарезервировано 
                                    <div 
                                        className='question' 
                                        onMouseEnter={ () => setShowPopup({reserved: true, cashback: false})}
                                        onMouseLeave={ () => setShowPopup({reserved: false, cashback: false})}
                                    >
                                            <QuestionCircleIcon/>
                                    </div>
                                </span>
                            </div>
                            <div className='bill-cash'><i>99 789 ₽</i></div>
                        </div>

                        <div className='row'>
                            <div className='bill-icon'><img src={MiniFullEllipses} alt='ellipses'/></div>
                            <div className='bill-info'>
                                <span className='bill-title'>Кешбэк</span>
                                <span className='bill-desc'>
                                    Профессионал – 2,5% 
                                    <div 
                                        className='question' 
                                        onMouseEnter={ () => setShowPopup({cashback: true, reserved: false})}
                                        onMouseLeave={ () => setShowPopup({cashback: false, reserved: false})}
                                    >
                                            <QuestionCircleIcon/>
                                    </div>
                                </span>
                            </div>
                            <div className='bill-cash'>789<i>,5 ₽</i></div>
                        </div>

                    </div>}
                </Collapse>  
            
            {
                showPopup.reserved
                ?
                <div className='popup' style={{marginTop: '114px'}}>
                    <h1>Резервирование средств</h1>
                    <span>Описание того, как это работает</span>
                </div>
                : 
                false
            }

            {
                showPopup.cashback
                ?
                <div className='popup' style={{marginTop: '182px'}}>
                    <h1>Кешбэк</h1>
                    <span>Описание того, как это работает</span>
                    <a>Подробнее о кешбэке</a>
                </div>
                : 
                false
            }
            

            <button type='button'>
                <MiniWhitePlus />
                <span>Пополнить счёт</span>
            </button>
        </div>
    )
}

export { MyFinance }