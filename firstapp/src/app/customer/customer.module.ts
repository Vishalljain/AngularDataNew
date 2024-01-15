import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FormsModule } from '@angular/forms';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';
import { DeleteCustomersComponent } from './delete-customers/delete-customers.component';


@NgModule({
  declarations: [
    CustomerComponent,
    AddCustomerComponent,
    EditCustomersComponent,
    DeleteCustomersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
