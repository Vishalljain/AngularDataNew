import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private _snackBar: MatSnackBar) {}


  btnClick(){
    this._snackBar.open("Hello Welcome to Email Sending app","Cancel")
  }

}
