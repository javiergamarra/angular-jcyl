import {Action} from '@ngrx/store';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export class LoginAction implements Action {

  type: string = LOGIN;

  constructor(public payload) {
  }
}

export class LogoutAction implements Action {

  type: string = LOGOUT;
}

class User {
  constructor(private name: String) {
  }
}

export function userReducer(state: User, action: LoginAction) {
  switch (action.type) {
    case LOGIN:
      return new User(action.payload);
    case LOGOUT:
      return '';

    default:
      return state;
  }
}
