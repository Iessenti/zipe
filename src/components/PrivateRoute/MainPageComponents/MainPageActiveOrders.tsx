import React, {useState, useEffect} from 'react'
import ProfileAvatar from 'assets/images/Pfp.png'
import {CellButtonNext} from 'shared/icons'

const MainPageActiveOrders = () => {
    const [hovered, setHovered] = useState({
        icon: false, block: false
    })
    const [runner, setRunner] = useState({
        width: '0%', animation: 'transition: all 10s ease-in-out'
    })

    useEffect( () => {
        setTimeout( () => {
            setRunner({width: '100%', animation: 'all 10s ease-in-out'})
            window.setInterval(() => {
                setRunner({width: '0%', animation: ''})
                setTimeout( () => setRunner({width: '100%', animation: 'all 10s ease-in-out'}), 500)
            }, 10010)
        }, 500)

    },[])

    return (
        <div className='main-page-offers'>
            <div className='main-page-offers__light'/>
            <div 
                className='main-page-offers__dark'
                style={{
                    background: ( (hovered.block && hovered.icon) || (!hovered.block) )  ? '#2D2D37' : '#464650'
                }}
                onMouseEnter={() => setHovered({...hovered, block: true})}
                onMouseLeave={() => setHovered({...hovered, block: false})}
                >
                    <div>
                        <img src={ProfileAvatar} alt="profile-avatar"/>
                        <span>Сайт для автомобильной компании в активной разработке</span>
                    </div>

                    <span 
                        className='main-page-offers__dark__icon'
                        onMouseEnter={() => setHovered({...hovered, icon: true})}
                        onMouseLeave={() => setHovered({...hovered, icon: false})}
                    >
                        <CellButtonNext iconProperty={ hovered ? '#464650' : '#13131C' }/>
                    </span>

                    <div className='main-page-offers__dark__runner' style={{width: runner.width, transition: runner.animation}}/>

            </div>
        </div>
    )
}

export { MainPageActiveOrders }