
export interface PopupState {
    isProfilePopupOpened: boolean;
    profilePopupTimeout: number | null;
}

export enum PopupActionTypes{
    PROFILE_POPUP = 'PROFILE_POPUP',
    SET_PROFILE_POPUP_TIMEOUT = 'SET_PROFILE_POPUP_TIMEOUT',
}

interface HandleProfilePopupAction {
    type: PopupActionTypes.PROFILE_POPUP;
    payload: boolean;
}

interface SetProfilePopupTimeoutAction {
    type: PopupActionTypes.SET_PROFILE_POPUP_TIMEOUT;
    payload: number;
}

export type PopupAction = HandleProfilePopupAction | SetProfilePopupTimeoutAction;