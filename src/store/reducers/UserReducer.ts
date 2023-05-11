import { UserActionTypes, UserState, UserAction } from "../types/user";

const initialState: UserState = {
    profile: null,
    loading: false,
    error: null
}

export const UserReducer = (state = initialState, action: UserAction): UserState => {
    switch(action.type) {

        case UserActionTypes.FETCH_USER:
            return { ...state, profile: null, loading: true, error: null }

        case UserActionTypes.FETCH_USER_SUCCESS:
            return { ...state, profile: action.payload, loading: false, error: null }

        case UserActionTypes.FETCH_USER_ERROR:
            return { ...state, profile: null, loading: false, error: action.payload }

        case UserActionTypes.RESET_USER:
            return { ...initialState }

        default:
            return state;
    }
}