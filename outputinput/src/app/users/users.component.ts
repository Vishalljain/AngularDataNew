import { Component } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users11!: User[];

  selectedUser!:User

  constructor() {
    this.users11 = [
      new User(1, "Leela", "Hyderabad", "Software"),
      new User(2, "Manoj", "Hyderabad", "Software"),
      new User(3, "Rohan", "Hyderabad", "Software")
    ]
  }
  trackUser(index: number, user: User) {
    return user.id
  }

  onUserSelectThen(event: User) {// or onUserSelectThen(event: any or Event) for(click) the event might be Event or any... here it is type User 
   
    console.log(event);//User {id: 2, name: 'Manoj', occupation: 'Hyderabad', address: 'Software'
    this.selectedUser = event;

  }
}
