import React from 'react';

import ProfileImage from 'assets/images/first-profile.png';
import IconStar from 'assets/images/IconStar.png'

type Props = {
    name: string;
    title: string;
    rate: string;
}

const ReadyPerformerCard = ({name, title, rate}: Props) => {
    console.log('smallCard!!')
    return (
        <div className='card'>
            <img src={ProfileImage} alt='profile' />
            <div className='card--info'>
                <span className='name'>{name}</span>
                <span className='title'>{title}</span>
            </div>
            <div className='card--star'><img src={IconStar} alt='star'/>{rate}</div>
        </div>
    )
}

export {ReadyPerformerCard}