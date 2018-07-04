import {Component, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import {UserService} from './shared/user.service';

@Component({
  selector: 'comedores-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {

  loggedUser;

  constructor(private userService: UserService, private store: Store<any>) {
    store.select('user').subscribe(user => this.loggedUser = user);
  }

}
