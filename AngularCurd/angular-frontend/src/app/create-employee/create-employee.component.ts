import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})


export class CreateEmployeeComponent {
  constructor(private employeeService: EmployeeService,private router:Router) { }
  employee: Employee = new Employee();

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      this.goToEmployeeList()
    })

  }

  //The data parameter in the.subscribe() function is the response from the server.In this case, it is not being used since the response is not needed to navigate to the employee list page.

  //from form we need to navigate to emloyeeList page -->get
  goToEmployeeList() {
    this.router.navigate(['/employees'])
  }


  onSubmit(form: NgForm) {
    if (form.invalid) {
      console.log("Not valid")
    }
    else {
      console.log("valid.....")
      this.saveEmployee()
    }
    
  }
}
