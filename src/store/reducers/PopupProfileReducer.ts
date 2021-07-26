import { PopupProfileAction, PopupProfileActionTypes, PopupProfileState } from "store/types/popupProfile";

const initialState: PopupProfileState = {
    isProfilePopupOpened: false,
    profilePopupTimeout: null
}

export const PopupProfileReducer = (state = initialState, action: PopupProfileAction): PopupProfileState => {
    switch(action.type) {

        case PopupProfileActionTypes.PROFILE_POPUP:
            return { ...state, isProfilePopupOpened: action.payload }

        case PopupProfileActionTypes.SET_PROFILE_POPUP_TIMEOUT:
            return { ...state, profilePopupTimeout: action.payload }

        default:
            return state;
    }
}