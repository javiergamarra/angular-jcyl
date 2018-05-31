import {Action} from '@ngrx/store';
import {User} from '../user.service';

export const RENAME = 'RENAME';

export class UserAction implements Action {

  type: string = RENAME;

  constructor(public payload) {
  }
}

export function userReducer(state: User, action: UserAction) {
  switch (action.type) {
    case RENAME:
      return state + action.payload;

    default:
      return state;
  }
}
