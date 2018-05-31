import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

class User {
  constructor(private name) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: Subject<User> = new BehaviorSubject<User>(null);

  constructor() {
    this.currentUser.next(new User('javier'));
  }

}
