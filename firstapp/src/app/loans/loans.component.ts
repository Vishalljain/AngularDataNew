import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service'
@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  users: any;
  constructor(private activatedRoute: ActivatedRoute, private userService: UsersService) {
    console.log(this.activatedRoute.snapshot.data)//data is same name given in route {data:AccountinfoGuard }
    //this.users=this.userService.getUsers()

  }
  ngOnInit(): void {
    console.log("ng", this.activatedRoute.snapshot.data)//data is same name given in route {data:AccountinfoGuard }
    this.userService.getUsers().subscribe(data => {
      console.log(data.name)
      this.users = data;
    
    }, (err) => {
      console.log("url not valid"+err)
    }
    )
      
  }
  
}
