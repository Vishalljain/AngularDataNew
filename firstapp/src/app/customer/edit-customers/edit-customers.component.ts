import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service'
@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.css']
})
export class EditCustomersComponent implements OnInit {
  constructor(private userService: UsersService) {

  }
  ngOnInit(): void {

  }
  updateUser() {
    this.userService.UpdateUser().subscribe(data => {
      console.log(data)
    })

  }

}
