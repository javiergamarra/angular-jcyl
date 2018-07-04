import {Component, OnInit} from '@angular/core';
import {LoginAction, LogoutAction} from '../shared/user-store';
import {Store} from '@ngrx/store';

@Component({
  selector: 'comedores-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private loggedUser: any;

  constructor(public store: Store<any>) {
  }

  ngOnInit() {
    this.store.select('user').subscribe(user => this.loggedUser = user);
  }

  login(value: string) {
    this.store.dispatch(new LoginAction(value));
  }

  disconnect() {
    this.store.dispatch(new LogoutAction());
  }
}
