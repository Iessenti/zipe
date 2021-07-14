import { routes } from 'routes';
import { ZIPE_STORAGE_KEY } from '../consts';
import AuthRequestService from '../services/AuthRequestService';
import { OrderActionTypes } from './types/order';
import { AuthType, LoginType, ProfileModel, RegistrationType, UserActionTypes } from './types/user';

const fetchUserAction = () => ({type: UserActionTypes.FETCH_USER});
const fetchUserSuccessAction = (payload: ProfileModel) => ({type: UserActionTypes.FETCH_USER_SUCCESS, payload});
const fetchUserErrorAction = () => ({type: UserActionTypes.FETCH_USER_ERROR});

const resetUserAction = () => ({type: UserActionTypes.RESET_USER});
const resetOrderAction = () => ({type: OrderActionTypes.RESET_ORDER});

const authService = new AuthRequestService();

export const loginAction = (loginParams: LoginType) => (dispatch: any)  => {
  dispatch(fetchUserAction());
  authService
    .loginAuth(loginParams)
    .then((result: AuthType) => {
      window.localStorage.setItem(ZIPE_STORAGE_KEY, result.token);
      dispatch(fetchUserSuccessAction(result.user));
    })
    .catch(() => dispatch(fetchUserErrorAction()));
};

export const registerAction = (registerParams: RegistrationType) => (dispatch: any)  => {
  dispatch(fetchUserAction());
  authService
    .registerAuth(registerParams)
    .then((result: AuthType) => {
      window.localStorage.setItem(ZIPE_STORAGE_KEY, result.token);
      dispatch(fetchUserSuccessAction(result.user));
      window.location.pathname = routes.code;
    })
    .catch(() => dispatch(fetchUserErrorAction()));
};

export const sendRegisterCodeAction = (code: string) => () => {  
  authService 
    .registerCodeAuth(code)
    .then((response) => {
      console.log(response)
    })
}
   
export const logoutFromAccountAction = () => (dispatch: any) => {
  localStorage.clear();
  dispatch(resetUserAction());
  dispatch(resetOrderAction());
}