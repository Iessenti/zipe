import React, { useState } from 'react';

import {VkIcon,TelegramIcon, InstagramIcon, YouTubeIcon, TwitterIcon, LogoIcon} from 'shared/icons';

import 'assets/sass/footer.sass';


const Footer= () => {

    const [hovered, setHovered] = useState<string | null>(null);

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
                        <a>О нас</a>
                        <a>Безопасность</a>
                        <a>Поддержка</a>
                    </div>
                </div>
                <div className="footer-info--social">
                    <a href="#" onMouseEnter={() => setHovered('vk')} onMouseLeave={() => setHovered(null)}>
                        <VkIcon fill={ (hovered === 'vk') ? '#6385FF' : '#567BFF' }/>
                    </a>
                    <a href="#" onMouseEnter={() => setHovered('tg')} onMouseLeave={() => setHovered(null)}>
                        <TelegramIcon fill={ (hovered === 'tg') ? '#6385FF' : '#567BFF' }/>
                    </a>
                    <a href="#" onMouseEnter={() => setHovered('inst')} onMouseLeave={() => setHovered(null)}>
                        <InstagramIcon fill={ (hovered === 'inst') ? '#6385FF' : '#567BFF' }/>
                    </a>
                    <a href="#" onMouseEnter={() => setHovered('yt')} onMouseLeave={() => setHovered(null)}>
                        <YouTubeIcon fill={ (hovered === 'yt') ? '#6385FF' : '#567BFF' }/>
                    </a>
                    <a href="#" onMouseEnter={() => setHovered('tw')} onMouseLeave={() => setHovered(null)}>
                        <TwitterIcon fill={ (hovered === 'tw') ? '#6385FF' : '#567BFF' }/>
                    </a>
                </div>
                <div className="separator"/>
                <div className='footer-info--bottom'>
                    <span>ООО «Зайп», 2021</span>
                    <a>Публичная оферта</a>
                </div>
            </div>
        </div>
    )
}

export { Footer };