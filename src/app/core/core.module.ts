import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreService} from './employee-data.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[CoreService],
 
})
export class CoreModule { }
