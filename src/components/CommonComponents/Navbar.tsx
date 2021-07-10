import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import {LogoIcon, ChatIcon, BellIcon, ProfileIcon, CircleIndicator} from 'shared/icons';

import { routes } from 'routes';

import 'assets/sass/navbar.sass';

type NavbarType = {
    handleProfilePopup: (value: boolean) => void;
}

const Navbar = ({ handleProfilePopup }: NavbarType) => {

    const [iconHover, setIconHover] = useState({
        chat: '#13131C',
        bell: '#13131C'
    })

    return (
        <header className='navbar'>
            <div className='container'>
                <div className="logo">
                    <LogoIcon />
                </div>
                <div className="navbar--info info">
                    <Link
                        className='info__make-order'
                        to={routes.main}
                    >
                        Создать заказ
                    </Link>
                    <div className="info__divider"/>
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
                    <div 
                        className="info__icon-container"
                        onMouseEnter={() => handleProfilePopup(true)}
                        // onMouseLeave={() => {
                        //     let timeout = window.setTimeout(() => {
                        //         dispatch(openProfilePopup(false))
                        //     }, 500)
                        //     dispatch(setProfilePopupTimeout(timeout))
                        // }}
                    >
                        <ProfileIcon/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export { Navbar }