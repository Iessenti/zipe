import React, { useState } from 'react';

import 'assets/sass/createOrder/orderDetails.sass';

import {LittleWalletIcon, CalendarIcon, InfoBubbleIcon} from 'shared/icons';
import ShieldImage from 'assets/images/shield.png';
import { Ripple } from 'components/Ripple';
import RocketImage from 'assets/images/rocket.png';

const OrderDetailsTab = () => {

    const [showTooltip, setShowToolTip] = useState(false)

    return (
        <div className="order-details">
            <div className='order-details--element'>
                <div  className='order-details row' style={{marginTop: '0px'}}>
                    <span>Ваш бюджет</span>
                    {
                        showTooltip
                        ?
                        <div className='order-details--element--input-wrapper--tooltip'>Text<div className='ledge'/></div>
                        :
                        false
                    }
                </div>
                <div className="order-details--element--input-wrapper">
                    <div className='order-details--element--input-wrapper--icon'><LittleWalletIcon/></div>
                    <input type='text' placeholder='10 000 ₽'/>
                    <div 
                        className='order-details--element--input-wrapper--icon'
                        onMouseEnter={ () => setShowToolTip(true)}
                        onMouseLeave={ () => setShowToolTip(false)}
                    >
                        <InfoBubbleIcon />
                    </div>
                </div>

            </div>

            <div className='order-details row'>
                <div className='order-details--element endData'>
                    <span>Дата завершения</span>
                    <div className="order-details--element--input-wrapper">
                        <div className='order-details--element--input-wrapper--icon'><CalendarIcon/></div>
                        <input type='text' placeholder='11 марта, понедельник'/>
                    </div>
                </div>
                <div className='order-details--element endTime'>
                    <span>Время завершения</span>
                    <div className="order-details--element--input-wrapper">
                        <div className='order-details--element--input-wrapper--icon'><CalendarIcon/></div>
                        <input type='text' placeholder='10:00'/>
                    </div>
                </div>
            </div>

            <div className='order-details row optionalTime'>
                <span>Сегодня</span>
                <span>Завтра</span>
                <span>3 дня</span>
                <span>Неделя</span>
                <span>Месяц</span>
            </div>

            <div className='order-details--shield-wrapper'>
                <img src={ShieldImage} alt='shield' />
                <p>Ваши средства защищены бесплатной безопасной сделкой. <span>Подробнее</span></p>
            </div>

            <div className='order-details--start-button'>
                <Ripple />
                Начать поиск
                <img src={RocketImage} alt=""/>
            </div>
        </div>
    )
}

export { OrderDetailsTab };