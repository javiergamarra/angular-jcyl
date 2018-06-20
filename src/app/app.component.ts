import {Component, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import {UserAction} from './shared/user-store';
import {UserService} from './shared/user.service';

@Component({
  selector: 'comedores-root',
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
