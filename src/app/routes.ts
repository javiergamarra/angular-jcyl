import { Routes, RouterModule } from '@angular/router';
import { GrantsComponent } from './grants/grants.component';
import { GrantComponent } from './grant/grant.component';
import { MyGuardGuard } from './my-guard.guard';

const routes: Routes = [
  { path: '', component: GrantsComponent },
  { path: 'grant/:id', component: GrantComponent, canActivate: [MyGuardGuard] },
  { path: 'new-grant', component: GrantComponent }
];

export const routing = RouterModule.forRoot(routes);
