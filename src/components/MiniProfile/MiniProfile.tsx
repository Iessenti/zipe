import React from 'react';

import { Progress } from 'rsuite';

import ProfilePic from 'assets/images/third-profile.png';
import { MiniGearIcon } from 'shared/icons';

const MiniProfile = () => {

    const { Circle } = Progress;

    return (
        <div className='mini-profile'>
            <div className='mini-profile--image'>
                <img src={ProfilePic} alt='profile'/>
                <Circle 
                            percent={50} 
                            strokeColor="#33336D"
                            strokeWidth={5}
                            trailColor='#D9D9E3'
                            trailWidth={5}
                            status='active'
                            style={{ width: 48 }}
                            showInfo={false}
                            className="popup-info--circle"
                />
            </div>

            <div className='mini-profile--info'>
                <span>Руслан Душечка</span>
                <div>Профессионал</div>
            </div>

           <div className='mini-profile--icon'> <MiniGearIcon /> </div>

        </div>  
    )
}

export { MiniProfile }