import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeDetailsComponent } from './add-employee-details.component';

const routes: Routes = [

  {path:'',component:AddEmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEmployeeDetailsRoutingModule { }
