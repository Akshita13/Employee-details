import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEmployeeDetailsRoutingModule } from './add-employee-details-routing.module';
import { AddEmployeeDetailsComponent } from './add-employee-details.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
@NgModule({
  imports: [
    CommonModule,
    AddEmployeeDetailsRoutingModule,ReactiveFormsModule,FormsModule
  ],
  declarations: [AddEmployeeDetailsComponent]
})
export class AddEmployeeDetailsModule { }
