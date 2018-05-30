import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'grants',
    loadChildren: '../app/new-grant/new-grant.module#NewGrantModule'
  },
  { path: '*', component: HomeComponent }
];

export const routing = RouterModule.forRoot(routes);
