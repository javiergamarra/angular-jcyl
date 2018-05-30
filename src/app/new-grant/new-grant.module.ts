import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GrantComponent } from '../grant/grant.component';
import { GrantsComponent } from '../grants/grants.component';
import { routing } from '../routes';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { MyGuardGuard } from '../my-guard.guard';

const routes: Routes = [
  { path: '', component: GrantsComponent },
  { path: 'new/:id', component: GrantComponent, canActivate: [MyGuardGuard] },
  { path: 'new', component: GrantComponent }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [GrantComponent, GrantsComponent],
  exports: [GrantsComponent]
})
export class NewGrantModule {}
