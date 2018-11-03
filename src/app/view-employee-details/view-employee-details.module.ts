import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewEmployeeDetailsRoutingModule } from './view-employee-details-routing.module';
import { ViewEmployeeDetailsComponent } from './view-employee-details.component';

@NgModule({
  imports: [
    CommonModule,
    ViewEmployeeDetailsRoutingModule
  ],
  declarations: [ViewEmployeeDetailsComponent],
  exports:[ViewEmployeeDetailsComponent]
})
export class ViewEmployeeDetailsModule { }
