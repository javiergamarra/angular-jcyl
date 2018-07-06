import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {debounceTime, distinctUntilChanged, filter, map, switchMap} from 'rxjs/operators';
import {fromEvent} from 'rxjs';
import {CenterService} from '../centers/center.service';
import {CateringService} from '../caterings/catering.service';

@Component({
  selector: 'comedores-center-suggestion',
  template: `
    <div class="field">
      <label for="CenterSuggestion">Center</label>
      <input type="text" id="CenterSuggestion" #centerSuggestion>
      <ul>
        <li *ngFor="let center of centers" (click)="selectCenter(center)">{{center.name}}</li>
      </ul>
    </div>
  `
})
export class CenterSuggestionComponent implements OnInit {
  centers;

  @ViewChild('centerSuggestion') centerSuggestion: ElementRef;
  @Output() private centerSelected = new EventEmitter();

  constructor(private centerService: CenterService, private cateringService: CateringService) {
  }

  ngOnInit() {
    fromEvent(this.centerSuggestion.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e.target.value),
        filter((text: string) => text.length > 2),
        debounceTime(700),
        distinctUntilChanged(),
        switchMap(x => this.centerService.getCentersByQuery(x)),
        map((x: any) => x.documents))
      .subscribe(x => this.centers = x);
  }

  selectCenter(center: any) {
    if (center.cateringId) {
      this.cateringService.getCatering(center.cateringId)
        .subscribe(catering => center.catering = catering, err => console.log(err));
    }
    this.centerSelected.emit(center);
  }
}
