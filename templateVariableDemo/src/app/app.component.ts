import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'templateVariableDemo';
  @ViewChild('myForm') myForm!: NgForm; // Use ViewChild to access the form
  submitted = false;
  formData: { name: string, email: string } = { name: '', email: '' };

  onSubmit() {
    // Set the submitted flag to true
    this.submitted = true;

    // Access the entire form data using the template reference variable #myForm
    const formValue = this.myForm.value;
    console.log(formValue,"----------------")

    // Access specific form controls
    const nameControl = this.myForm.controls['name1'];
    const emailControl = this.myForm.controls['email'];

    // Access values of specific form controls
    console.log('Name Value:', nameControl.value);
    console.log('Email Value:', emailControl.value);

    // Access the entire form data
    console.log('Form Data:', formValue);



    /*
    The ngModel directive alone, without [(ngModel)], is used for one-way data binding. It connects the input field to the form control created by Angular. The name="name" attribute is crucial here because it tells Angular to associate this input with the form control named "name."

    If you want to bind this input to a property in your component class using two-way data binding ([(ngModel)]), you would typically write it like this:


    The <input> element, when used with the ngModel directive, is associated with an Angular form control. Angular implicitly creates a FormControl instance behind the scenes for the input field with the name "name".

So, in this context, the form control is essentially represented by the ngModel directive and the associated input element. When you use ngModel, you are telling Angular to track the state of that input field as part of the form, and Angular automatically creates and manages a corresponding FormControl instance.

If you want more explicit control over form controls or if you need to work with more complex forms, you might consider using reactive forms, which give you more flexibility in creating and managing form controls in the component class. In the case of template-driven forms, the form controls are created implicitly based on the template structure.
    */


/*
User
in above case why to use @ViewChild('myForm') myForm!: NgForm; as it is a sing;le component
You're correct, and I appreciate your observation. In the specific case of a single form in the AppComponent, using @ViewChild might be considered unnecessary. The @ViewChild decorator is typically more relevant when dealing with child components or accessing elements that are projected into a component's view.

For a simple form within the same component, you can directly reference the form using the template reference variable without @ViewChild. Here's how you can modify the code:
<!-- app.component.html -->
<h1>Angular Template-Driven Form Example</h1>

<!-- Template-Driven Form -->
<form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
  <!-- Name Input -->
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" ngModel required>
  </div>

  <!-- Email Input -->
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" ngModel required>
  </div>

  <!-- Submit Button -->
  <button type="submit">Submit</button>
</form>

<!-- Display Form Data -->
<div *ngIf="submitted">
  <h3>Form Submitted Successfully!</h3>
  <p>Name: {{ formData.name }}</p>
  <p>Email: {{ formData.email }}</p>
</div>

// app.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted = false;
  formData: { name: string, email: string } = { name: '', email: '' };

  onSubmit(myForm: NgForm) {
    this.submitted = true;

    // Access the entire form data using the form parameter
    const formValue = myForm.value;

    // Access specific form controls
    const nameControl = myForm.controls['name'];
    const emailControl = myForm.controls['email'];

    // Access values of specific form controls
    console.log('Name Value:', nameControl.value);
    console.log('Email Value:', emailControl.value);

    // Access the entire form data
    console.log('Form Data:', formValue);
  }
}





*/


   
  }
}
