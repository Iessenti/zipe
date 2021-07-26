import React, {useState} from 'react'

import { SetNoficationIcon } from '../../shared/SetNotificationIcon'
import { CirclesMenuIcon } from '../../shared/icons'

interface NotificationContent {
    type: string;
    subType: string;
    title: string;
    description1: string;
    cash: string;
    desciption2: string;
    blue: string;
    description3: string;
    date: string;
    time: string;
}

const NotificationLine = ({type, subType, title, description1, cash, desciption2, blue, description3, date, time}: NotificationContent) => {
    
    const [showMenu, setShowMenu] = useState<boolean>(false)

    return (
        <div 
            className='element'
            onMouseEnter={ () => setShowMenu(true)}
            onMouseLeave={ () => setShowMenu(false)}
        >
            {
                SetNoficationIcon(type, subType)
            }
            <div className='info'>
                <div className='title'>{title}</div>
                <div className='desc'>
                    {description1}
                    <span className='cash'>{cash}</span>
                    {desciption2}
                    <span className='blue'>{blue}</span>
                    {description3}
                </div> 
            </div>

            <div className='date'>
                {date} в {time}
            </div>

            {
                showMenu
                &&
                <div
                    className='menu-circles'
                    
                >
                    <CirclesMenuIcon />
                </div>
            }
        </div> 
    )
}

export {NotificationLine}