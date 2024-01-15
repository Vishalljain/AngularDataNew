import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder-component',
  templateUrl: './form-builder-component.component.html',
  styleUrls: ['./form-builder-component.component.css']
})
export class FormBuilderComponentComponent {

  constructor(private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    userName: ['Vishwas'],
    password: [''],
    confirmPassword: [''],

    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: [''],
    })
  });
    }
