import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GrantsService} from '../grants.service';
import {fromEvent, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'comedores-grants',
  templateUrl: './grants.component.html',
  styleUrls: ['./grants.component.css']
})
export class GrantsComponent implements OnInit {
  grants$;
  province;
  municipality;

  @ViewChild('alumnFilter') alumnFilter: ElementRef;

  constructor(private grantsService: GrantsService) {
  }

  ngOnInit() {
    this.grants$ = merge(
      fromEvent(this.alumnFilter.nativeElement, 'keyup').pipe(
        map((e: any) => e.target.value),
        filter((text: string) => text.length > 2),
        debounceTime(700),
        distinctUntilChanged(),
        switchMap(x => this.grantsService.getGrantsByQuery(x)),
        map((x: any) => x.documents)
      ),
      this.grantsService.getGrants()
    );
  }

  searchGrants() {
    this.grants$ = this.grantsService.getGrants();
  }

  delete(grant) {
    this.grantsService.deleteGrant(grant.id)
      .subscribe(
        x => this.searchGrants(),
        err => console.log(err)
      );
  }

  selectedProvince(province) {
    this.province = province;
  }

  selectedMunicipality(municipality) {
    this.municipality = municipality;
  }

  selectedCity(city) {
    console.log(city);
  }
}
