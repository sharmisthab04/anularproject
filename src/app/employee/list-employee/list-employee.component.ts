import { Component, OnInit } from '@angular/core';
import {employeeService} from '../employee.service';
import {IEEmployee1} from '../iemployee';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {
  empList:any = [];
  
  constructor(private _empservice : employeeService,private _router: Router) { }
  

  ngOnInit() {
    this._empservice.getUsers().subscribe(
      allempList => {this.empList = allempList;
      });
     // this.getProducts();
  }
  getEmpDetails(empid:number){
    this._router.navigate(['employees/edit',empid]);
  }
  getProducts() {
    //this.empList = [];
    this._empservice.getUsers().subscribe((data: {}) => {
     // console.log(data);
      this.empList = data;
      console.log(this.empList)
    });
  }

}