import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GrantsService } from '../grants.service';
import { of, fromEvent } from 'rxjs';
import {
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-grants',
  templateUrl: './grants.component.html',
  styleUrls: ['./grants.component.css']
})
export class GrantsComponent implements OnInit {
  grants;
  grant: any;

  @ViewChild('alumnFilter') alumnFilter: ElementRef;

  constructor(private grantsService: GrantsService) {}

  ngOnInit() {
    this.searchGrants();

    fromEvent(this.alumnFilter.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e.target.value),
        filter((text: string) => text.length > 2),
        debounceTime(700),
        distinctUntilChanged(),
        switchMap(x => this.grantsService.getQueryGrants(x))
      )
      .subscribe(x => console.log(x));
  }

  private searchGrants() {
    this.grantsService.getGrants().then(x => (this.grants = x));
  }

  search(alumnFilter) {
    this.grants = this.grants.filter(x =>
      x.alumn.toLowerCase().includes(alumnFilter.value.toLowerCase())
    );
    return false;
  }

  edit(grant) {
    this.grant = grant;
  }

  delete(grant) {
    this.grantsService.delete(grant.id);
  }
}
