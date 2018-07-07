import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'comedores-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FatherComponent implements OnInit {

  @Output()
  fatherFilled = new EventEmitter();
  father = {};

  constructor() {
  }

  ngOnInit() {
  }

  change(key, value) {
    this.father[key] = value;
    this.fatherFilled.emit(this.father);
  }

}
