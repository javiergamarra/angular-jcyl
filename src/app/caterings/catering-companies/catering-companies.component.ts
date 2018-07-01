import {Component, OnInit} from '@angular/core';
import {CateringService} from '../catering.service';

@Component({
  selector: 'comedores-catering-companies',
  template: `
    <table class="ui celled table">
      <tr *ngFor="let catering of caterings$ | async">
        <td>{{catering.name}}</td>
        <td>{{catering.regular_price}}</td>
        <td>{{catering.sporadic_price}}</td>
        <td>
          <a [routerLink]="[catering.id]">Edit</a>
          |
          <span (click)="delete(catering.id)">Delete</span>
        </td>
      </tr>
    </table>
  `,
  styles: ['']
})
export class CateringCompaniesComponent implements OnInit {

  caterings$;

  constructor(private cateringService: CateringService) {
  }

  ngOnInit() {
    this.caterings$ = this.cateringService.getCaterings();
  }

  delete(cateringId) {
    this.cateringService.delete(cateringId)
      .subscribe(
        _ => this.ngOnInit(),
        err => console.log(err)
      );
  }

}
