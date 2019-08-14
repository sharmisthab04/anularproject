import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,FormBuilder,Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {employeeService} from '../employee.service';
import {IEEmployee1} from '../iemployee';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm:FormGroup;
  constructor( private fb : FormBuilder, private _router : ActivatedRoute, private empService:employeeService) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName : ['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      email : [''],
      skills: this.fb.group({
        skillName: [''],
        experienceInYear: [''],
        proficiency: ['intermidiate']
      })
    })
    this._router.paramMap.subscribe(params => {
      const empId = +params.get('id');
      if(empId){
        this.getEmpDatils(empId)
      }
    })
  }
  getEmpDatils(empId:number){
    this.empService.getUserById(empId).subscribe(
      (employee: IEEmployee1) => this.editEmployee(employee),
    );
  }
  editEmployee(employee :IEEmployee1){
    console.log(employee.email)
    this.employeeForm.patchValue({
      fullName : employee.fullName,
      email :  employee.email,
      /*skills: {
        skillName: 'Angualar',
        experienceInYear: 3,
        proficiency: 'intermidiate'
    }*/
  })
  }
  onformControl(group:FormGroup): void{
    Object.keys(group.controls).forEach((key:string ) =>{
      const abs = group.get(key);
      if(abs instanceof FormGroup){
        this.onformControl(abs)
      }
      else{
          console.log(abs.value);
      }
    })
  }
  onSubmit(): void{
    console.log(this.employeeForm.value);
    console.log(this.employeeForm.controls.fullName.value);
    console.log(this.employeeForm.get('fullName').value);
  }
  onLoaddataClick() : void{
    this.onformControl(this.employeeForm);
    /*this.employeeForm.patchValue({
      fullName : 'Sharmistha Banerjee',
      email : 'sharmi_b04@gmail.com',
     /* skills: {
        skillName: 'Angualar',
        experienceInYear: 3,
        proficiency: 'intermidiate'
    }
  })*/
}

}
