import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PadreComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
