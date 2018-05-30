import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GrantsService } from '../grants.service';
import { of, fromEvent, merge, Observable, empty } from 'rxjs';
import {
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
  mergeMap
} from 'rxjs/operators';
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';

@Component({
  selector: 'app-grants',
  templateUrl: './grants.component.html',
  styleUrls: ['./grants.component.css']
})
export class GrantsComponent implements OnInit {
  grants$;
  grant: any;

  @ViewChild('alumnFilter') alumnFilter: ElementRef;

  constructor(private grantsService: GrantsService) {}

  ngOnInit() {
    // this.searchGrants();

    this.grants$ = merge(
      fromEvent(this.alumnFilter.nativeElement, 'keyup').pipe(
        map((e: any) => e.target.value),
        filter((text: string) => text.length > 2),
        debounceTime(700),
        distinctUntilChanged(),
        switchMap(x => this.grantsService.getQueryGrants(x)),
        map(x => x.documents)
      ),
      this.grantsService.getGrants()
    );
  }

  private searchGrants() {
    this.grants$ = this.grantsService.getGrants();
  }

  delete(grant) {
    this.grantsService.delete(grant.id);
  }
}
