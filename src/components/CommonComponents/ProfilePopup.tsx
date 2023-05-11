import React from 'react';

import { Progress } from 'rsuite';

import { ProfileIconPopup, FolderIcon, StarIcon, WalletIcon, RubleIcon, ExitIcon } from 'shared/icons';

const ProfilePopup = () => {

    const { Circle } = Progress;

    return(
        <div>
            <div className='popup-profile-hidden'/>
            <div className='popup-profile'>
                <div className="popup-info popup-item">
                    <div className="popup-info__img">
                        <ProfileIconPopup/>
                    </div>
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
                    <div className="popup-info--balance">
                        <span className="popup-info--balance__title">Дмитрий И.</span>
                        <div>
                            <span>Профессионал</span>
                        </div>
                    </div>
                </div>
                <div className='popup-bonus'>
                    <div className='popup-bonus__ruble'><RubleIcon/></div>
                    <div>
                        <span>200₽ на счёт</span>
                        <p>За первый заказ от 1500₽ в мобильном приложении</p>
                    </div>
                </div>
                <div className="popup-menu">
                    <div className="popup-menu--item popup-item">
                        <div>
                            <WalletIcon/>
                            <span>17 289<span>.12<span>₽</span></span></span>
                        </div>
                        <div>
                            <span>990</span>
                        </div>
                    </div>
                    <div className="popup-menu--item popup-item">
                        <div>
                            <FolderIcon/>
                            <span>Заказы</span>
                        </div>

                    </div>
                    <div className="popup-menu--item popup-item">
                        <StarIcon/>
                        <span>Рейтинг</span>
                        <span>4.98</span>
                    </div>
                </div>
                <div className="popup-actions">
                    <div className="popup-actions--item">
                        <ExitIcon/>
                        <span>Выйти из аккаунта</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ProfilePopup }