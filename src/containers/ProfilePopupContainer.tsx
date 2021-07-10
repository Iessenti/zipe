import React from 'react';
import { CSSTransition } from 'react-transition-group';

import { ProfilePopup } from 'components/CommonComponents/ProfilePopup';

type ProfilePopupType = {
    isOpened: boolean;
}

const ProfilePopupContainer = ({ isOpened }: ProfilePopupType) => (
    <CSSTransition
        in={isOpened}
        timeout={700}
        classNames='popup-profile-wrapper'     
        unmountOnExit
    >
        <ProfilePopup/>
    </CSSTransition>
)

export { ProfilePopupContainer }