import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'grants',
    loadChildren: '../app/grants/grants.module#GrantsModule'
  },
  { path: '*', component: HomeComponent }
];

export const routing = RouterModule.forRoot(routes);
