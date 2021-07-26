export interface PopupNotificationsState {
    isNotificationsPopupOpened: boolean;
    notificationsPopupTimeout: number | null;
}

export enum PopupNotificationsActionTypes {
    NOTIFICATIONS_POPUP = 'NOTIFICATIONS_POPUP',
    SET_NOTIFICATIONS_POPUP_TIMEOUT = 'SET_NOTIFICATIONS_POPUP_TIMEOUT',
}

interface HandleNotificationsPopupAction {
    type: PopupNotificationsActionTypes.NOTIFICATIONS_POPUP;
    payload: boolean;
}

interface SetNotificationsPopupTimeout {
    type: PopupNotificationsActionTypes.SET_NOTIFICATIONS_POPUP_TIMEOUT;
    payload: number;
}

export type PopupNotificationsAction = HandleNotificationsPopupAction | SetNotificationsPopupTimeout;