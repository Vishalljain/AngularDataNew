import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loans-types',
  templateUrl: './loans-types.component.html',
  styleUrls: ['./loans-types.component.css']
})
export class LoansTypesComponent implements OnInit {
  /*Frm grp tutorial
  addLoanTypeForm : FormGroup;

  constructor() {
    this.addLoanTypeForm = new FormGroup({
      'loanName': new FormControl(),
      'loanDescription': new FormControl()
    })}
    */

  //form builder tutorial
  /*
  addLoanTypeForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.addLoanTypeForm = this.fb.group({
      'loanName': new FormControl('suryaLoan'),
      'loanDescription': new FormControl('no interset')
    })
  }
  */
  addLoanTypeForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.addLoanTypeForm = this.fb.group({
      'loanName': new FormControl('', [
        Validators.required,
        Validators.minLength(10)

      ]),
      'loanDescription': new FormControl('', Validators.required),
      'loanType': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10)
      ])),
    });
    //Form Array with Form controller
    let users = new FormArray([
      new FormControl("ARC"),
      new FormControl("Tutorial")
    ]);

    let users11 = new FormArray([
      this.fb.group({
        'name': new FormControl(''),
        'age': new FormControl('')
      })
     
    ]);

    
   
    //Form Array with Form Group
  }
  get FrmArr() {
    return this.addLoanTypeForm.controls['users'] as FormArray;
  }
  get users11() {
    return this.addLoanTypeForm.get('users11') as FormArray;
  }
  
  
  ngOnInit(): void {//Track value changes u can do for single filed or entire form
    //this.addLoanTypeForm.valueChanges.subscribe
    this.addLoanTypeForm.get('loanName')?.valueChanges.subscribe(data => {
      console.log(data);//this code u can put in a seprate method name as trackForm instad of ngInit used this method on trackForm
    })

    this.addLoanTypeForm.get('loanType')?.statusChanges.subscribe(data => {
      console.log(data);
    })
   
  }

  

  addLoanType() {
    console.log(this.addLoanTypeForm.value)//get value of entire form
    console.log(this.addLoanTypeForm.get('loanName')?.value)//get value of specific form control element
    this.addLoanTypeForm.valueChanges.subscribe(data => {//get value on changes
      console.log(data);
    })
    console.log(this.addLoanTypeForm.valid);//true
    console.log(this.addLoanTypeForm.invalid);//false
    console.log(this.addLoanTypeForm.pending);//false as it was submitted 
    console.log(this.addLoanTypeForm.pristine);//false form value was not been modified
    console.log(this.addLoanTypeForm.dirty);//true form  value was modified
    console.log(this.addLoanTypeForm.touched);//true
    console.log(this.addLoanTypeForm.untouched);//false
  }
  resetForm() {
    this.addLoanTypeForm.reset()
  }
  
  
}
