import { PopupNotificationsAction, PopupNotificationsActionTypes, PopupNotificationsState } from "store/types/popupNotifications";

const initialState: PopupNotificationsState = {
    isNotificationsPopupOpened: false,
    notificationsPopupTimeout: null
}

export const PopupNotificationsReducer = (state = initialState, action: PopupNotificationsAction): PopupNotificationsState => {
    switch(action.type) {

        case PopupNotificationsActionTypes.NOTIFICATIONS_POPUP:
            return { ...state, isNotificationsPopupOpened: action.payload }

        case PopupNotificationsActionTypes.SET_NOTIFICATIONS_POPUP_TIMEOUT:
            return { ...state, notificationsPopupTimeout: action.payload }

        default:
            return state;
    }
}