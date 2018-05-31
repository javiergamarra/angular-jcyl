import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {AccordionModule} from 'ngx-bootstrap';
import {AuthenticationGuard} from '../shared/authentication.guard';
import {GrantsComponent} from './grants/grants.component';
import {GrantComponent} from './grant/grant.component';

const routes: Routes = [
  { path: '', component: GrantsComponent },
  { path: 'new-grant', component: GrantComponent },
  { path: ':id', component: GrantComponent, canActivate: [AuthenticationGuard] },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes), MatFormFieldModule,
    MatInputModule, MatDatepickerModule, MatNativeDateModule, AccordionModule.forRoot()],
  declarations: [GrantComponent, GrantsComponent],
  exports: [GrantsComponent]
})
export class GrantsModule {
}
