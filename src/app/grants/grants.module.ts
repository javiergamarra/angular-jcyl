import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationGuard} from '../shared/authentication.guard';
import {GrantsComponent} from './grants/grants.component';
import {GrantComponent} from './grant/grant.component';
import {PadreComponent} from '../padre/padre.component';
import {NifDirective} from '../nif.directive';

const routes: Routes = [
  { path: '', component: GrantsComponent },
  { path: 'new-grant', component: GrantComponent },
  { path: ':id', component: GrantComponent, canActivate: [AuthenticationGuard] },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [GrantComponent, GrantsComponent, PadreComponent, NifDirective],
  entryComponents: [PadreComponent],
  exports: [GrantsComponent]
})
export class GrantsModule {
}
