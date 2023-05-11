import React, {useState} from 'react'
import { Animation } from 'rsuite';
import { NOTIFICATIONS } from 'consts'
import 'assets/sass/notificationsPage.sass'
import { NotificationLine } from 'components/NotificationLine'
import { SearchIcon, CellButtonNext, MiniCalendarIcon, GreyCheckMark, MiniGearIcon, RollingCurve} from 'shared/icons'
import Bell from 'assets/images/bell.png'

const {Collapse}= Animation;

const NotificationsPageContainer = () => {
    
    const [showCollapse, setShowCollapse] = useState<boolean>(false)

    return (
        <div className='notifications-page-wrapper'>
            <div className='container'>
                
                <span className='header-title'>Уведомление</span>

                <div className='manage-panel'>

                    <div className='arrows'>
                        <div className='back'><CellButtonNext iconProperty='#000'/></div>
                        <div className='calendar'><div><MiniCalendarIcon/></div>Июль</div>
                        <div><CellButtonNext iconProperty='#000'/></div>
                    </div>

                    <div className='collapse-container'>
                        <div 
                            className='title' 
                            role='presentation'
                            onClick={() => {
                                if (showCollapse) {
                                    setShowCollapse(false)
                                } else {
                                    setShowCollapse(true)
                                }
                            }}
                        >
                            <img src={Bell} alt='bell'/> 
                            Все уведомления 
                            <div className={`icon ${ showCollapse ? 'rotated' : ''}`}>
                                <RollingCurve/>
                            </div>
                            
                        </div>
                        
                        <Collapse 
                            in={showCollapse}
                            unmountOnExit
                            className='collapse-list'
                        >
                            {(props: any, ref: any) => 
                                <div  {...props} ref={ref}>
                                    <div className='e'>
                                        <div>lol</div>
                                        <div>lol</div>
                                    </div>
                                </div>
                            }
                        </Collapse>

                    </div>
                    

                    <div className='search'><input type='text' placeholder='Найдите любые обновления и события'/><SearchIcon /></div>
                
                    <div className='notification-settings'>
                        <GreyCheckMark/>
                        <div className='separator'/>
                        <MiniGearIcon/>
                    </div>
                </div>

                {
                    NOTIFICATIONS.map(el => 
                        <div className='date-container'>
                            <span className='date-header'>{el.date}</span>
                            {
                                el.body.map(elem =>
                                    <NotificationLine 
                                        type={elem.type}
                                        subType={elem.subType}
                                        title={elem.title}
                                        description1={elem.description1}
                                        cash={elem.cash}
                                        desciption2={elem.desciption2}
                                        blue={elem.blue}
                                        description3={elem.description3}
                                        time={elem.time}
                                        date={el.date}
                                    />   
                                )
                            }
                        </div>    
                    )
                }
            </div>
        </div>
    )
}

export { NotificationsPageContainer }