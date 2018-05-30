import { Routes, RouterModule } from '@angular/router';
import { MyGuardGuard } from './my-guard.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'grants',
    loadChildren: '../app/new-grant/new-grant.module#NewGrantModule'
  }
];

export const routing = RouterModule.forRoot(routes);
