import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home.component';
import { PreloadserviceService } from './preloadservice.service';
//const routes: Routes = [];

const appRoutes: Routes = [
  {path: 'home', component:HomeComponent},
  {path:'employees' ,data: {preload:true}, loadChildren:'./employee/employee.module#EmployeeModule'},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy : PreloadserviceService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
