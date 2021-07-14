import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';

import { StepTabs } from 'components/StepTabs';
import {LogoIcon, ChatIcon, BellIcon, ProfileIcon, CircleIndicator} from 'shared/icons';

import { routes } from 'routes';
import { PopupActionTypes } from 'store/types/popup';

import 'assets/sass/navbar.sass';

const Navbar = () => {

    const handleProfilePopupAction = (value: boolean) => ({type: PopupActionTypes.PROFILE_POPUP, payload: value});
    const setTimeoutProfilePopupAction = (value: number | null) => ({type: PopupActionTypes.SET_PROFILE_POPUP_TIMEOUT, payload: value});

    const [iconHover, setIconHover] = useState({
        chat: '#13131C',
        bell: '#13131C'
    });

    const dispatch = useDispatch();

    const isOrderCreatingPage = useRouteMatch(routes.orderCreate);

    return (
        <header className='navbar'>
            <div className='container'>
                <div className="logo">
                    <LogoIcon />
                </div>

                {
                    isOrderCreatingPage 
                    ?
                    <StepTabs/>    
                    : 
                    false                
                }
                
                <div className="navbar--info info">
                    {

                        isOrderCreatingPage 
                        ?
                        false
                        :
                        <>
                            <Link
                                className='info__make-order'
                                to={routes.main}
                            >
                                Создать заказ
                            </Link>
                            <div className="info__divider"/>
                        </>
                    }
                    <div 
                        className="info__icon-container chat"
                        onMouseEnter={ () => setIconHover({...iconHover, chat: '#464650'})}
                        onMouseLeave={ () => setIconHover({...iconHover, chat: '#13131C'})}
                    >
                        <div className="info__icon-container__icon">
                            <ChatIcon fill={iconHover.chat} />
                        </div>
                        <div className="indicator"><span><CircleIndicator /></span></div>
                    </div>
                    <div 
                        className="info__icon-container"
                        onMouseEnter={ () => setIconHover({...iconHover, bell: '#464650'})}
                        onMouseLeave={ () => setIconHover({...iconHover, bell: '#13131C'})}
                    >
                        <div className="info__icon-container__icon">
                            <BellIcon fill={iconHover.bell}/>
                        </div>
                        <div className="indicator"><span><CircleIndicator /></span></div>
                    </div>
                    {/* eslint-disable jsx-a11y/mouse-events-have-key-events */}
                    <div 
                        className="info__icon-container"
                        onMouseOver={() => dispatch(handleProfilePopupAction(true))}
                        onMouseLeave={() => {
                            const timeout = window.setTimeout(() => {
                                dispatch(handleProfilePopupAction(false))
                            }, 1000)
                            dispatch(setTimeoutProfilePopupAction(timeout))
                        }}
                    >
                        <ProfileIcon/>
                    </div>
                    {/* eslint-disable jsx-a11y/mouse-events-have-key-events */}
                </div>
            </div>
        </header>
    )
}

export { Navbar }