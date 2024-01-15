import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {
  id: number | any;
  employee = new Employee
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    })


  }

}
