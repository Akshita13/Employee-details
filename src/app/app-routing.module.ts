import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {path:'addemployee',loadChildren:'./add-employee-details/add-employee-details.module#AddEmployeeDetailsModule'},

  {path:'viewemployee',loadChildren:'./view-employee-details/view-employee-details.module#ViewEmployeeDetailsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
