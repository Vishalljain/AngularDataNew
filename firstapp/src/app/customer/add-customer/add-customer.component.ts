import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../../services/users.service'
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  firstName: string = '';
  terms: boolean = false;
  customerType: string = '';

  constructor(private userService: UsersService) {

  }

  addCustomer(formValue: NgForm) {
   // console.log(formValue)//we will get full form data
    console.log(formValue.value)//we will get only data

    const postBody = {
      title: formValue.value.firstName,
      body: formValue.value.customerType
    };
    console.log(postBody)
    this.userService.addUser(postBody).subscribe(data => {
      console.log(data);
    }, (err) => {
      console.log("unable to add user" + err);
    })
  }
  restForm(formValue: NgForm) {
    //formValue.reset()
    formValue.resetForm();
  }

  loadValue(formValue: NgForm) {
    let userDetails = {
      firstName: "ARC",
      terms: true,
      customerType:'Premium'
    }
    formValue.setValue(userDetails);
  }
}
