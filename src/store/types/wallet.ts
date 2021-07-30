export interface WalletState {
    isStoryOpened: boolean;
    isBillActionsOpened: boolean;
}

export enum WalletActionTypes {
    TOGGLE_STORY_STATE = 'TOGGLE_STORY_STATE',
    TOGGLE_BILL_ACTIONS_STATE = 'TOGGLE_BILL_ACTIONS_STATE'
}

interface ChangeStoryState {
    type: WalletActionTypes.TOGGLE_STORY_STATE,
    payload: boolean
}

interface ChangeBillActionsState {
    type: WalletActionTypes.TOGGLE_BILL_ACTIONS_STATE,
    payload: boolean
}

export type WalletAction = ChangeStoryState | ChangeBillActionsState;