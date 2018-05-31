import {NgModule} from '@angular/core';
import {GrantComponent} from '../grant/grant.component';
import {GrantsComponent} from '../grants/grants.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {MyGuardGuard} from '../my-guard.guard';
import {MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {AccordionModule} from 'ngx-bootstrap';

const routes: Routes = [
  { path: '', component: GrantsComponent },
  { path: 'new/:id', component: GrantComponent, canActivate: [MyGuardGuard] },
  { path: 'new', component: GrantComponent }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes), MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, AccordionModule.forRoot()],
  declarations: [GrantComponent, GrantsComponent],
  exports: [GrantsComponent]
})
export class NewGrantModule {
}
