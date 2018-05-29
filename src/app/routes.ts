import { Routes, RouterModule } from '@angular/router';
import { GrantsComponent } from './grants/grants.component';
import { GrantComponent } from './grant/grant.component';

const routes: Routes = [
  { path: '', component: GrantsComponent },
  { path: 'grant/:id', component: GrantComponent },
  { path: 'new-grant', component: GrantComponent }
];

export const routing = RouterModule.forRoot(routes);
