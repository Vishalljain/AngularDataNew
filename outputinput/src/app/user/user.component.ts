import { EventEmitter, Output } from '@angular/core';
import { Component, Input } from '@angular/core';
import { User } from '../users/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input() user11!: User;//we are receving data from parent component

  @Output() userSelectedMadu = new EventEmitter<User>()
  onUserSelect() {
    this.userSelectedMadu.emit(this.user11)
  }

}
