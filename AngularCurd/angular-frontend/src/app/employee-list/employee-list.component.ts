import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  constructor(private employeeService: EmployeeService, private router: Router) { }

  employees: Employee[] | undefined
  //selectedemployees!: Employee;
  selectedemployees: Employee | null = null;
  deleteButtonEnabled: boolean = false;
  //employees: Observable<Employee[]> | any
  
  
  ngOnInit(): void {
    this.getemployees()
  }
  getemployees() {
    //this.employees = this.employeeService.getEmployeeList();
    this.employeeService.getEmployeeList().subscribe(data => {
      console.log(".........",data)
    this.employees=data
    })
  }
  updateEmployee(id: number) {
   
    this.router.navigate(['update-employee',id])
  }

  viewEmployee(id: number) {
    this.router.navigate(['view-employee', id])
  }
  onRowClick(employees: Employee) {
    this.selectedemployees = employees;
   // this.deleteButtonEnabled = true;
    console.log("onclick", this.selectedemployees)


  }
  delete() {
    if (this.selectedemployees) {
      this.employeeService.deleteEmployee(this.selectedemployees.id).subscribe(data => {
        this.getemployees();
        //this.deleteButtonEnabled = false;
        this.selectedemployees = null;
      })
    }
  }
  isButtonDisabled(): boolean {
    return !this.selectedemployees;

  }
  
  
}

