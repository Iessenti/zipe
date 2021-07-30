import { WalletAction, WalletState, WalletActionTypes } from "store/types/wallet"

const initialState: WalletState = {
    isStoryOpened: false,
    isBillActionsOpened: false
}

export const WalletReducer = (state = initialState, action: WalletAction): WalletState => {
    switch (action.type) {
        case WalletActionTypes.TOGGLE_STORY_STATE: 
            return {...state, isStoryOpened: action.payload}
        case WalletActionTypes.TOGGLE_BILL_ACTIONS_STATE:
            return {...state, isBillActionsOpened: action.payload}
        default:
            return state;
    }
}