import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GrantComponent } from '../grant/grant.component';
import { GrantsComponent } from '../grants/grants.component';
import { routing } from '../routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, routing],
  declarations: [GrantComponent, GrantsComponent],
  exports: [GrantsComponent]
})
export class NewGrantModule {}
