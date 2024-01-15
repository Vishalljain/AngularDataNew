import { Component, ViewChild  } from '@angular/core';
import { Employee } from './employee';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emp1!: Employee

  @ViewChild(EmployeeListComponent) emp : EmployeeListComponent | undefined

  title = 'angular-frontend';

  onRowClicked(employee: Employee) {
    console.log('Employee clicked:', employee);
  }
  }

