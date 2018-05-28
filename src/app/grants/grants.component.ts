import { Component, OnInit } from '@angular/core';
import { GrantsService } from '../grants.service';

@Component({
  selector: 'app-grants',
  templateUrl: './grants.component.html',
  styleUrls: ['./grants.component.css']
})
export class GrantsComponent implements OnInit {
  grants = this.grantsService.getGrants();
  grant: any;

  constructor(private grantsService: GrantsService) {}

  ngOnInit() {}

  search(alumnFilter) {
    this.grants = this.grantsService
      .getGrants()
      .filter(x =>
        x.alumn.toLowerCase().includes(alumnFilter.value.toLowerCase())
      );
    return false;
  }

  edit(grant) {
    this.grant = grant;
  }

  delete(grant) {
    this.grants = this.grantsService
      .getGrants()
      .filter(x => !x.alumn.toLowerCase().includes(grant.alumn.toLowerCase()));
  }
}
