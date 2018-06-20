import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FatherComponent implements OnInit {

  constructor(private userService: UserService) {
    this.userService.currentUser.asObservable().subscribe(x => console.log(x));
  }

  ngOnInit() {
  }

}
