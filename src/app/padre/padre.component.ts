import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PadreComponent implements OnInit {

  constructor(private userService: UserService) {
    this.userService.currentUser.asObservable().subscribe(x => console.log(x));
  }

  ngOnInit() {
  }

}
