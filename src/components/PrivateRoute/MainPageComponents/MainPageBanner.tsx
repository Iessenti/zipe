import React, {useState} from 'react'
import Mockup1 from 'assets/images/Mockup1.png'
import Mockup2 from 'assets/images/Mockup2.png'
import Ellipses from 'assets/images/Ellipses.png'
import {AppleIcon, GoogleIcon} from 'shared/icons'

const MainPageBanner = () => {

    const [hovered, setHovered] = useState<string | null>(null)

    return (
        <div className='main-page-banner'>
            
            <div className='main-page-banner__info'>
                <span className='main-page-banner__info__title'>Приложение уже здесь</span>
                <span className='main-page-banner__info__text'>Управляйте заказами, общайтесь с исполнителями и контролируйте процесс работы с телефона</span>
                <div className='main-page-banner__info__buttons'>

                    <div 
                        onMouseEnter={() => setHovered('apple')} 
                        onMouseLeave={() => setHovered(null)}>
                        <AppleIcon iconProperty={ hovered === 'apple' ? '#2046FB' : '#fff' }/>
                        <span>App Store</span>
                    </div>

                    <div 
                        onMouseEnter={() => setHovered('google')} 
                        onMouseLeave={() => setHovered(null)}>
                        <GoogleIcon iconProperty={ hovered === 'google' ? '#2046FB ' : '#fff' }/>
                        <span>Google Play</span>
                    </div>
                </div>
            </div>

            <img src={Mockup1} className='main-page-banner__mockup1' alt="first-mockup"/>
            <img src={Mockup2} className='main-page-banner__mockup2' alt="second-mockup"/>
            <img src={Ellipses} className='main-page-banner__ellipses' alt="circles"/>
        </div>
    )
}

export { MainPageBanner };