import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service'
@Component({
  selector: 'app-delete-customers',
  templateUrl: './delete-customers.component.html',
  styleUrls: ['./delete-customers.component.css']
})
export class DeleteCustomersComponent {
  constructor(private userService: UsersService) { }

  deleteUser() {
    this.userService.deleteUser(1).subscribe(data => {
      console.log(data)
    }, (err) => {
      console.log("Not able to delete the data"+err)
    })
  }

}
