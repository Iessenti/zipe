import React from 'react'

import { NOTIFICATIONS } from 'consts'
import 'assets/sass/notificationsPage.sass'
import { NotificationLine } from 'components/NotificationLine'

const NotificationsPageContainer = () => {
    
    console.log('NotificationsPageContainer')

    return (
        <div className='notifications-page-wrapper'>
            <div className='container'>
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