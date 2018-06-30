import {Component, OnInit} from '@angular/core';
import {CenterService} from '../center.service';

@Component({
  selector: 'comedores-centers',
  template: `
    <table class="ui celled table">
      <tr *ngFor="let center of centers$ | async">
        <td>{{center.nombre}}</td>
        <td>
          <a [routerLink]="[center.id]">Edit</a>
          |
          <span (click)="delete(center.id)">Delete</span>
        </td>
      </tr>
    </table>
  `,
  styles: ['']
})
export class CentersComponent implements OnInit {

  centers$;

  constructor(private centerService: CenterService) {
  }

  ngOnInit() {
    this.centers$ = this.centerService.getCenters();
  }

  delete(centerId) {
    this.centerService.delete(centerId)
      .subscribe(
        _ => this.ngOnInit(),
        err => console.log(err)
      );
  }

}
