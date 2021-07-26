import React, { useState } from 'react';

import {useRouteMatch} from 'react-router-dom';

import {VkIcon,TelegramIcon, InstagramIcon, YouTubeIcon, TwitterIcon, LogoIcon} from 'shared/icons';

import 'assets/sass/footer.sass';

import {routes} from '../../routes';

const Footer = () => {

    const [hovered, setHovered] = useState<string | null>(null);

    const isOrderCreatingPage = useRouteMatch(routes.orderCreate);
    const isOrderSearchPage = useRouteMatch(routes.orderSearch);
    const isFoundPerformersPage = useRouteMatch(routes.performersFound);

    if (isOrderCreatingPage || isOrderSearchPage || isFoundPerformersPage) {
        return null;
    }

    return (
        <div className="footer">
            <div className="container">
                
                <div className="footer-info">
                    <button 
                        type="button"
                        className="footer-info--company"
                        onClick={ () => { window.scrollTo(window.pageYOffset, 0) } }    
                    >
                        <LogoIcon />  
                    </button>
                    <div className='footer-info--menu'>
                        <span>О нас</span>
                        <span>Безопасность</span>
                        <span>Поддержка</span>
                    </div>
                </div>
                <div className="footer-info--social">
                    <a href="#" onMouseEnter={() => setHovered('vk')} onMouseLeave={() => setHovered(null)}>
                        <VkIcon iconProperty={ (hovered === 'vk') ? '#6385FF' : '#567BFF' }/>
                    </a>
                    <a href="#" onMouseEnter={() => setHovered('tg')} onMouseLeave={() => setHovered(null)}>
                        <TelegramIcon iconProperty={ (hovered === 'tg') ? '#6385FF' : '#567BFF' }/>
                    </a>
                    <a href="#" onMouseEnter={() => setHovered('inst')} onMouseLeave={() => setHovered(null)}>
                        <InstagramIcon iconProperty={ (hovered === 'inst') ? '#6385FF' : '#567BFF' }/>
                    </a>
                    <a href="#" onMouseEnter={() => setHovered('yt')} onMouseLeave={() => setHovered(null)}>
                        <YouTubeIcon iconProperty={ (hovered === 'yt') ? '#6385FF' : '#567BFF' }/>
                    </a>
                    <a href="#" onMouseEnter={() => setHovered('tw')} onMouseLeave={() => setHovered(null)}>
                        <TwitterIcon iconProperty={ (hovered === 'tw') ? '#6385FF' : '#567BFF' }/>
                    </a>
                </div>
                <div className="separator"/>
                <div className='footer-info--bottom'>
                    <span>ООО «Зайп», 2021</span>
                    <span>Публичная оферта</span>
                </div>
            </div>
        </div>
    )
}

export { Footer };