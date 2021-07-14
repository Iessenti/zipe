export type AuthType = {
    status: string;
    user: ProfileModel;
    token: string;
}
  
export type LoginType = {
    email: string;
    password: string;
}
  
export type RegistrationType = {
    type: string;
    email: string;
    password: string;
    password_double: string;
    first_name: string;
    last_name: string;
}

export type CodeConfirmationType = {
    code: string;
}

export type CodeRegistrationType = {
    status: string;
    message: string;
}

export interface ProfileModel {
    id: number;
    about: null | string;
    avatar: null | string;
    balls: number;
    banner: null | string;
    birthdate: null | string;
    black_list: ProfileModel[];
    created: string;
    email: string;
    first_name: string;
    last_name: string;
    level: null | number;
    phone: null | string;
    rating: null | number;
    theme: null | string;
    user_type: null | string;
    username: null | string;
}

export interface UserState {
    profile: ProfileModel | null;
    loading: boolean;
    error: string | null;
}

export enum UserActionTypes{
    FETCH_USER = 'FETCH_USER',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR',
    RESET_USER = 'RESET_USER'
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USER;
}

interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USER_SUCCESS;
    payload: ProfileModel;
}

interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USER_ERROR;
    payload: string;
}

interface ResetUserAction {
    type: UserActionTypes.RESET_USER;
}


export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction |  ResetUserAction;