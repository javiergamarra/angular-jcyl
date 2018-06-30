import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {Route, RouterModule} from '@angular/router';
import {CentersComponent} from './centers/centers.component';
import {CenterComponent} from './center/center.component';

const centerRoutes: Route[] = [
  { path: '', component: CentersComponent },
  { path: 'new', component: CenterComponent },
  { path: ':id', component: CenterComponent },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(centerRoutes)
  ],
  declarations: [CenterComponent, CentersComponent]
})
export class CentersModule {
}
