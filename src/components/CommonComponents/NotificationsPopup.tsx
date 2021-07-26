import React, {useState} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { CSSTransition } from 'react-transition-group'
import { CirclesMenuIcon, CheckMarkIcon, SmallBlackGear, WatchAllIcon } from 'shared/icons'
import 'assets/sass/notificationsPopup.sass'
import { NOTIFICATIONS } from '../../consts'
import { SetNoficationIcon } from '../../shared/SetNotificationIcon'

const NotificationsPopup = () => {
    
    const [isAddMenuOpened, setIsAddMenuOpened] = useState<boolean>(false)

    return (
        <div>
            <div className='popup-notifications'>
                <div className='hidden'/>
                <div className='header'>
                    <span>Уведомления</span>
                    <div className='menu-icon' onMouseEnter={() => setIsAddMenuOpened(true)}><CirclesMenuIcon/></div>
                </div>

                <CSSTransition
                    timeout={200}
                    in={isAddMenuOpened}
                    unmountOnExit
                >
                    <div className='additional-menu' onMouseLeave={() => setIsAddMenuOpened(false)}>
                        <div><CheckMarkIcon/> <span>Отметить все как просмотренные</span></div>
                        <div><SmallBlackGear/> <span>Настройки уведомлений</span></div>
                        <div><WatchAllIcon/> <span>Посмотреть все уведомления</span></div>
                    </div>
                </CSSTransition>

                <PerfectScrollbar className='scrollbar-container ps'>
                    {
                        NOTIFICATIONS.map( el => 
                            el.body.map( elem => 
                                <div className='element'>
                                    {
                                        SetNoficationIcon(elem.type, elem.subType)
                                    }
                                    <div className='info'>
                                        <div className='title'>
                                                {elem.description1}
                                                <span className='cash'>{elem.cash}</span>
                                                {elem.desciption2}
                                                <span className='blue'>{elem.blue}</span>
                                                {elem.description3}
                                        </div>
                                        <div className='date'>
                                            {el.date} в {elem.time}
                                        </div>
                                    </div>
                                </div>    
                            )
                        )
                    }
                </PerfectScrollbar>
            </div>
        </div>
    )
}

export { NotificationsPopup }