import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {UserComponent} from '../user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'grants', loadChildren: '../app/grants/grants.module#GrantsModule' },
  { path: 'centers', loadChildren: '../app/centers/centers.module#CentersModule' },
  { path: 'caterings', loadChildren: '../app/caterings/caterings.module#CateringsModule' },
  { path: 'user', component: UserComponent },
  { path: '*', component: HomeComponent }
];

export const routing = RouterModule.forRoot(routes);
