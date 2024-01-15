import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
 { path: "employees", component: EmployeeListComponent },
  //means localhost:4200 need to redirect to localhost:4200/employees->next line meaning
  { path: '', redirectTo: "employees", pathMatch: 'full' },
  //or {path : '',component: EmployeeListComponent},
  { path: "create-employee", component: CreateEmployeeComponent },
  { path: "update-employee/:id", component: UpdateEmployeeComponent },
  { path: "view-employee/:id", component: ViewEmployeeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
