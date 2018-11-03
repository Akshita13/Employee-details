import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewEmployeeDetailsComponent } from './view-employee-details.component';

const routes: Routes = [

  {path:'',component:ViewEmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewEmployeeDetailsRoutingModule { }
