
export interface PopupProfileState {
    isProfilePopupOpened: boolean;
    profilePopupTimeout: number | null;
}

export enum PopupProfileActionTypes{
    PROFILE_POPUP = 'PROFILE_POPUP',
    SET_PROFILE_POPUP_TIMEOUT = 'SET_PROFILE_POPUP_TIMEOUT',
}

interface HandleProfilePopupAction {
    type: PopupProfileActionTypes.PROFILE_POPUP;
    payload: boolean;
}

interface SetProfilePopupTimeoutAction {
    type: PopupProfileActionTypes.SET_PROFILE_POPUP_TIMEOUT;
    payload: number;
}

export type PopupProfileAction = HandleProfilePopupAction | SetProfilePopupTimeoutAction;