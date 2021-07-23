import React from 'react';

import ProfileImage from 'assets/images/first-profile.png';
import Calendar from 'assets/images/ColorCalendar.png';
import CashBag from 'assets/images/CashBag.png';
import { MiniRightTopCurve,  MiniHeart, MiniEnvelope } from 'shared/icons';

type Props = {
    name: string;
    title: string;
    rate: string;
    projects: string;
    disputes: string;
}

const PerformerCard = ({name, title, rate, projects, disputes}: Props) => {
    console.log('card!!')
    return (
        <div className='performer-card'>
            <div className='performer-card--header'>
                <div className='performer-card--header--photo'>
                    <img src={ProfileImage} alt='profile' />
                    <div className='performer-card--header--photo--heart'><MiniHeart/></div>
                </div>
                <div className='performer-card--header--info'>
                    <h1>{name}</h1>
                    <span>{title}</span>
                    <div>Портфолио<MiniRightTopCurve/></div>
                </div>
            </div>
            
            <div className='performer-card--main'>
                <div className='performer-card--main--statics'>
                    <div className='performer-card--main--statics--info-element'><span>Рейтинг</span><div>{rate}</div></div>
                    <div className='performer-card--main--statics--separator'/>
                    <div className='performer-card--main--statics--info-element'><span>Заказы</span><div>{projects}</div></div>
                    <div className='performer-card--main--statics--separator'/>
                    <div className='performer-card--main--statics--info-element'><span>Споры</span><div>{disputes}</div></div>
                </div>

                <div className='performer-card--main--cash'>
                    <img src={CashBag} alt='cash'/>Выполнит работу за <span>2,500 ₽</span>
                </div>

                <div className='performer-card--main--time'>
                    <img src={Calendar} alt='calendar'/>Срок выполнения <span>до 25 июля</span>
                </div>

                <div className='performer-card--main--buttons'>
                    <div className='performer-card--main--buttons--start'>Начать работу</div>
                    <div className='performer-card--main--buttons--message'><MiniEnvelope/></div>
                </div>
            </div>

        </div>
    )
}

export {PerformerCard}