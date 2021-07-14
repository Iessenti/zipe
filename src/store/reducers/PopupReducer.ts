import { PopupAction, PopupActionTypes, PopupState } from "store/types/popup";

const initialState: PopupState = {
    isProfilePopupOpened: false,
    profilePopupTimeout: null
}

export const PopupReducer = (state = initialState, action: PopupAction): PopupState => {
    switch(action.type) {

        case PopupActionTypes.PROFILE_POPUP:
            return { ...state, isProfilePopupOpened: action.payload }

        case PopupActionTypes.SET_PROFILE_POPUP_TIMEOUT:
            return { ...state, profilePopupTimeout: action.payload }

        default:
            return state;
    }
}