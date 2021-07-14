import { AuthType, LoginType, RegistrationType } from 'store/types/user';
import ServerRequestService from './RequestsService';

export default class AuthRequestService {
  apiRequest = new ServerRequestService();

  protected readonly API_LOGIN_PATH = '/login/';

  protected readonly API_REGISTER_PATH = '/register/';

  protected readonly API_REGISTER_CODE_PATH = '/register/code/';

  protected readonly API_REGISTER_RESEND_PATH = '/register/resend/';

  public loginAuth(authParams: LoginType): Promise<AuthType> {
    return this.apiRequest.getResource(this.API_LOGIN_PATH, undefined, "POST",  {...authParams})
  }

  public registerAuth(authParams: RegistrationType): Promise<AuthType> {
    return this.apiRequest.getResource(this.API_REGISTER_PATH, undefined, "POST",  {...authParams})
  }

  public registerCodeAuth(authParams: any): Promise<AuthType> {
    return this.apiRequest.getResource(this.API_REGISTER_CODE_PATH, undefined, "POST",  {...authParams})
  }

  public registerResendAuth(authParams: any): Promise<AuthType> {
    return this.apiRequest.getResource(this.API_REGISTER_RESEND_PATH, undefined, "POST",  {...authParams})
  }
}