import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'comedores-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FatherComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
