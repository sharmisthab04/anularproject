import { NgModule } from '@angular/core';



import{ EmployeeRoutingModule } from './employee-routing-module'; 

import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CreateEmployeeComponent,
    ListEmployeeComponent
  ],
  imports: [
    EmployeeRoutingModule,
    SharedModule
  ],
  exports :[RouterModule]
})
export class EmployeeModule { }
