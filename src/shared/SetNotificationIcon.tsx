import React from 'react'

import FlyingCash from 'assets/images/FlyingCash.png'
import Lock from 'assets/images/LockIcon.png'
import Ellipses from 'assets/images/MiniFullEllipses.png'
import IronFolder from 'assets/images/IronFolder.png'
import ZipeLightning from 'assets/images/ZipeLightning.png'
import ZipeFinding from 'assets/images/ZipeFinding.png'
import Performer from 'assets/images/Performer.png'
import SupportIcon from 'assets/images/SupportIcon.png'
import JudgeIcon from 'assets/images/JudgeIcon.png'
import YellowLightning from 'assets/images/YellowLightning.png'

export const SetNoficationIcon = (type: string, subType: string) => {
    switch (type) {
        case 'finances': return <div className='notification-icon' style={{background: '#EBF0EE'}}><img src={FlyingCash} alt='FlyingCash'/></div>
        case 'security': return <div className='notification-icon' style={{background: '#F8F7EB'}}><img src={Lock} alt='lock'/></div>
        case 'cashback': return <div className='notification-icon' style={{background: '#FFF'}}><img src={Ellipses} alt='ellipses'/></div>
        case 'projects': 
            switch (subType) {
                case "working": return <div className='notification-icon' style={{background: '#F4F6F8'}}><img src={IronFolder} alt='IronFolder'/></div>
                case 'finding': return <div className='notification-icon' style={{background: '#F4F6F8'}}><img src={ZipeFinding} alt='IronFolder'/></div>
                case 'performer': return <div className='notification-icon' style={{background: '#F4F6F8'}}><img src={Performer} alt='IronFolder'/></div>
                default: return <div>none</div>
            }    
        case 'service':
            switch (subType) {
                case 'zipe': return <div className='notification-icon' style={{background: 'rgba(52, 172, 255, 0.24)'}}><img src={ZipeLightning} alt='IronFolder'/></div>
                case 'support': return <div className='notification-icon' style={{background: 'rgba(52, 172, 255, 0.24)'}}><img src={SupportIcon} alt='IronFolder'/></div>
                case 'judge': return <div className='notification-icon' style={{background: 'rgba(198, 198, 198, 0.2)'}}><img src={JudgeIcon} alt='IronFolder'/></div>
                case 'unique': return <div className='notification-icon' style={{backgroundColor: 'rgba(255, 202, 0, 0.12)'}}><img src={YellowLightning} alt='IronFolder'/></div>
                default: return <div>none</div>
            }
        default: return <div>none</div>
    }
}