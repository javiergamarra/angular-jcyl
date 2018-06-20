import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {Route, RouterModule} from '@angular/router';
import {CateringCompaniesComponent} from './catering-companies/catering-companies.component';
import {CateringCompanyComponent} from './catering-company/catering-company.component';

const cateringRoutes: Route[] = [
  { path: '', component: CateringCompaniesComponent },
  { path: 'new', component: CateringCompanyComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(cateringRoutes)
  ],
  declarations: [CateringCompaniesComponent, CateringCompanyComponent]
})
export class CateringsModule {
}
