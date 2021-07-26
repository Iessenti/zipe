import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { RootState } from 'store/reducers';
import { PopupProfileActionTypes } from 'store/types/popupProfile';

import { ProfilePopup } from 'components/CommonComponents/ProfilePopup';

const ProfilePopupContainer = () => {

    const handleProfilePopupAction = (value: boolean) => ({type: PopupProfileActionTypes.PROFILE_POPUP, payload: value});
    const setTimeoutProfilePopupAction = (value: number | null) => ({type: PopupProfileActionTypes.SET_PROFILE_POPUP_TIMEOUT, payload: value});

    const dispatch = useDispatch();

    const profilePopupInstance = useSelector((state: RootState) => state.popupProfile);

    return (
        <CSSTransition
            in={profilePopupInstance && profilePopupInstance.isProfilePopupOpened || false}
            timeout={300}
            classNames={{
                appear: 'popup-profile-wrapper appear',
                appearActive: 'popup-profile-wrapper appear-active',
                appearDone: 'popup-profile-wrapper appear-done',
                enter: 'popup-profile-wrapper enter',
                enterActive: 'popup-profile-wrapper enter-active',
                enterDone: 'popup-profile-wrapper enter-done',
                exit: 'popup-profile-wrapper exit',
                exitActive: 'popup-profile-wrapper exit-active',
                exitDone: 'popup-profile-wrapper exit-done',
            }}
            unmountOnExit
        >
            {/* eslint-disable jsx-a11y/mouse-events-have-key-events */}
            <div
                onMouseOver={() => {
                    if (profilePopupInstance.profilePopupTimeout) window.clearTimeout(profilePopupInstance.profilePopupTimeout);
                    dispatch(setTimeoutProfilePopupAction(null))
                    if (!profilePopupInstance.isProfilePopupOpened) {
                        dispatch(handleProfilePopupAction(true))
                    }
                }}  
                onMouseLeave={() => {
                    dispatch(handleProfilePopupAction(false))
                }} 
            >
                <ProfilePopup/>
            </div>
            {/* eslint-disable jsx-a11y/mouse-events-have-key-events */}
        </CSSTransition>
    )
}

export { ProfilePopupContainer }