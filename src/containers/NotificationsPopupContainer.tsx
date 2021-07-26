import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { NotificationsPopup } from 'components/CommonComponents/NotificationsPopup'
import { RootState } from 'store/reducers';
import { PopupNotificationsActionTypes } from 'store/types/popupNotifications';

const NotificationsPopupContainer = () => {

    const handleNotificationsPopupAction = (value: boolean) => ({type: PopupNotificationsActionTypes.NOTIFICATIONS_POPUP, payload: value});
    const setTimeoutNotificationsPopupAction = (value: number | null) => ({type: PopupNotificationsActionTypes.SET_NOTIFICATIONS_POPUP_TIMEOUT, payload: value});

    const dispatch = useDispatch();

    const notificationsPopupInstance = useSelector((state: RootState) => state.popupNotifications);

    return (
        <CSSTransition
            in={notificationsPopupInstance && notificationsPopupInstance.isNotificationsPopupOpened || false}
            timeout={200}
            classNames={{
                appear: 'popup-notifications-wrapper appear',
                appearActive: 'popup-notifications-wrapper appear-active',
                appearDone: 'popup-notifications-wrapper appear-done',
                enter: 'popup-notifications-wrapper enter',
                enterActive: 'popup-notifications-wrapper enter-active',
                enterDone: 'popup-notifications-wrapper enter-done',
                exit: 'popup-notifications-wrapper exit',
                exitActive: 'popup-notifications-wrapper exit-active',
                exitDone: 'popup-notifications-wrapper exit-done',
            }}
            unmountOnExit
        >
            {/* eslint-disable jsx-a11y/mouse-events-have-key-events */}
            <div
                onMouseOver={() => {
                    if (notificationsPopupInstance.notificationsPopupTimeout) window.clearTimeout(notificationsPopupInstance.notificationsPopupTimeout);
                    dispatch(setTimeoutNotificationsPopupAction(null))
                    if (!notificationsPopupInstance.isNotificationsPopupOpened) {
                        dispatch(handleNotificationsPopupAction(true))
                    }
                }}  
                onMouseLeave={() => {
                    dispatch(handleNotificationsPopupAction(false))
                }} 
            >
                <NotificationsPopup/>
            </div>
            {/* eslint-disable jsx-a11y/mouse-events-have-key-events */}
        </CSSTransition>
    )
}

export { NotificationsPopupContainer }