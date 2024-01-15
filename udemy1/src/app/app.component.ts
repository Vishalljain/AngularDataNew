import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from './person';
import { PersonService } from './person.service';

/*
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persons: Person[] = [];
  singlePerson!: Person;
  person: Person = new Person();
  loadingPersons = false;
  showPersons = false;

  constructor(private personService: PersonService) { }

  savePerson(): void {
    this.personService.savePerson(this.person)
      .subscribe(savedPerson => {
        console.log(this.person.name)
        console.log('Person saved successfully:', savedPerson);
        // Additional logic after successful save
      }, error => {
        console.error('Error saving person:', error);
        // Handle error
      });
  }


  loadPersons(): void {
    this.loadingPersons = true;
    console.log(this.loadingPersons)
    this.personService.getPersons()
      .subscribe(persons => {
        this.persons = persons;
        this.loadingPersons = false;
        this.showPersons = true;
        console.log(this.loadingPersons)
      });
  }

  loadSinglePerson(): void {
    this.loadingPersons = true;
    this.personService.getPersonById(1).subscribe(per => {
      this.singlePerson = per;
      this.loadingPersons = true;
      this.showPersons = true;
    });

  }


}*/



@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Person List</h2>
      <ul>
        <li *ngFor="let person of persons">{{ person.name }} - {{ person.age }}</li>
      </ul>
    </div>
    <hr />
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
      <label>Name:</label>
      <input type="text" formControlName="name" />
      <div *ngIf="nameError">Enter a unique name.</div>

      <label>Age:</label>
      <input type="number" formControlName="age" />
      <div *ngIf="ageError">Enter a unique age.</div>

      <button type="submit" [disabled]="myForm.invalid">Submit</button>
    </form>
  `,
})
export class AppComponent {
  myForm: FormGroup;
  nameError = false;
  ageError = false;
  persons: Person[] = [];

  constructor(private fb: FormBuilder, private dataService: PersonService) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
    });

    this.loadPersons();
  }

  loadPersons() {
    this.dataService.getPersons().subscribe(
      (persons: Person[]) => {
        this.persons = persons;
      },
      (error: any) => {
        console.error('Error loading persons:', error);
      }
    );
  }

  onSubmit() {
    const formData = this.myForm.value;

    this.dataService.savePersonRes(formData).subscribe(
      (response: any) => {
        console.log('Person saved successfully:', response);
        this.resetForm();
        this.loadPersons();
      },
      (error: any) => {
        console.error('Error saving person:', error);
        if (error instanceof HttpErrorResponse && error.error === 'DuplicateNameAndAge' && error.status === 400) {
          console.log("inside")
          this.nameError = true;
          this.ageError = true;
        } else {
          this.nameError = false;
          this.ageError = false;
        }
      }
    );
  }

  resetForm() {
    this.myForm.reset();
    this.nameError = false;
    this.ageError = false;
  }
}
