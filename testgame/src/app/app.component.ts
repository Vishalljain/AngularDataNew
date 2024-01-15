import { STRING_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SecurityServiceService } from './security-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  response = ""
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

  constructor(private authService: SecurityServiceService) { }

  login(): void {
    this.authService.authenticate(this.username, this.password).subscribe(
      (response) => {
        alert("successful")
        console.log(response,"-----")
        this.isLoggedIn = true;
      },
      (error: any) => {
        alert("unsuccessful")
        console.error('Authentication failed---', error);
      }
    );
  }
  ngOnInit(): void {
    this.authService.getHi().subscribe(data => {
      this.response = data;
    });
  }
  

  logout(): void {
    this.isLoggedIn = false;
    this.username = '';
    this.password = '';
  }
}


