import {Component, ViewEncapsulation} from '@angular/core';
import {UserService} from './user.service';
import {Store} from '@ngrx/store';
import {UserAction} from './shared/user-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {

  constructor(private userService: UserService, private store: Store<any>) {
    console.log(store.select('user').subscribe(x => console.log(x)));
    store.dispatch(new UserAction('jorge'));
  }

}
