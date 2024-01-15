import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { PasswordValidator } from './shared-validation/password.validator';
import { forbiddenNameValidator } from './shared-validation/userName.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactiveForms';

  registrationForm!: FormGroup;
  /*
  registrationForm = new FormGroup({
    userName: new FormControl('Vishwas'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl(''),
    })
  });
  */
  
  /*
  registrationForm = new FormGroup({
    userName: new FormControl('Vishwas'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl(''),
    })
  });
  */
  constructor(private fb: FormBuilder, private _registrationService: RegistrationService) { }
    ngOnInit(){
      this.registrationForm = this.fb.group({
        userName: ['Vishwas', Validators.required],
        email: [''],
        subscribe: [false],
        password: ['', [Validators.required, Validators.minLength(5), forbiddenNameValidator]],
        confirmPassword: [''],

        address: this.fb.group({
          city: [''],
          state: [''],
          postalCode: [''],
        }),
        alternateEmails1: this.fb.array([])
      }, { validator: PasswordValidator });
      //conditional validation
      this.registrationForm.get('subscribe')?.valueChanges.subscribe(
        checkedValue => {
          const email = this.registrationForm.get("email");
          if (checkedValue) {
            email?.setValidators(Validators.required)
          } else {
            email?.clearValidators();
          }
          //to ensure correct status is reflected
          email?.updateValueAndValidity();
        }
      )
    }

  



  //setValue will take all form value or u can use patch value

  loadApiData() {
    this.registrationForm.setValue({
      userName: 'Vishal',
      email: 'vj2008232@gmail.com',
      subscribe: true,
      password: 'test',
      confirmPassword: 'test',
      address: {
        city: 'City',
        state: 'state',
        postalCode: '12345'
      }

    });
  }
  /*patch method without address
   * loadApiData() {
    this.registrationForm.setValue({
      userName: 'Vishal',
      password: 'test',
      confirmPassword: 'test'
      });
  }
   */


  // common method instead of using this line......registrationForm.get('userName') in template 


  get userName() {
   return this.registrationForm.get('userName');
  }
  //instead of get method u can use this as well
  userName11() {
    return this.registrationForm.get('userName')?.value;
  }

  get getteremail() {
    return this.registrationForm.get('email');
  }


  get alternateEmails() {
    return this.registrationForm.get('alternateEmails1') as FormArray
  }

  addAlternateEmail() {
    this.alternateEmails.push(this.fb.control(''))
  }
  onSubmit() {
    console.log(this.registrationForm.value)
    this._registrationService.register(this.registrationForm.value).subscribe(response => console.log('success', response),
      error => console.error("Error", error)
    )
  }

}
