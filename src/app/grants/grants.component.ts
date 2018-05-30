import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GrantsService} from '../grants.service';
import {fromEvent, interval, merge, zip} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-grants',
  templateUrl: './grants.component.html',
  styleUrls: ['./grants.component.css']
})
export class GrantsComponent implements OnInit {
  grants$;
  grant: any;

  @ViewChild('alumnFilter') alumnFilter: ElementRef;

  constructor(private grantsService: GrantsService) {
    zip(
      interval(1000).pipe(map(x => 'a')),
      interval(2000).pipe(map(x => 'b'))
    ).subscribe(x => console.log(x));

    // combineLatest
    // concat
    // merge
    // race
    // zip
    // startWith
  }

  ngOnInit() {
    // this.searchGrants();

    this.grants$ = merge(
      fromEvent(this.alumnFilter.nativeElement, 'keyup').pipe(
        map((e: any) => e.target.value),
        filter((text: string) => text.length > 2),
        debounceTime(700),
        distinctUntilChanged(),
        switchMap(x => this.grantsService.getQueryGrants(x)),
        map((x: any) => x.documents)
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
