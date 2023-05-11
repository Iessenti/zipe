import React, {useState} from 'react'
import { CSSTransition } from 'react-transition-group'
import { SetNoficationIcon } from '../../shared/SetNotificationIcon'
import { CirclesMenuIcon, MiddleQuestionCircle, NoCircleIcon } from '../../shared/icons'

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
    const [showContextWindow, setShowContextWindow] = useState<boolean>(false)
    
    let x: number = 0;
    document.body.addEventListener('click', e => {
        if (showContextWindow && showMenu) {

            const target = e.target as HTMLElement
            const menu = document.querySelector('.context-window') as HTMLElement;
            if (menu !== null) {
                const itsMenu = (target === menu) || menu.contains(target);
                x += 1;
                if (!itsMenu && (x>1) ) {
                    setShowContextWindow(false)
                    x = 0
                }
            }

        }
    })
    
    return (
        <div 
            className='element'
            onMouseEnter={ () => setShowMenu(true)}
            onMouseLeave={ () => {
                if (!showContextWindow) {
                    setShowMenu(false)
                }
            }}
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
                    className={`menu-circles ${ showContextWindow && 'active'  }`}
                    onClick={ () => setShowContextWindow(true) }
                    role='presentation'
                >
                    <CirclesMenuIcon />
                </div>
            }

            <CSSTransition
                in={showContextWindow}
                timeout={200}
                classNames={{
                    appear: 'context-window appear',
                    appearActive: 'context-window appear-active',
                    appearDone: 'context-window appear-done',
                    enter: 'context-window enter',
                    enterActive: 'context-window enter-active',
                    enterDone: 'context-window enter-done',
                    exit: 'context-window exit',
                    exitActive: 'context-window exit-active',
                    exitDone: 'context-window exit-done',
                  }}
                unmountOnExit
            >
                <div id="9">
                    <div className='title'><MiddleQuestionCircle />Поддержка</div>
                    <div className='title'><NoCircleIcon />Не получать</div>
                </div>
            </CSSTransition>
        </div> 
    )
}

export {NotificationLine}