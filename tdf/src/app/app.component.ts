import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  submitted = false;

  errorMsg = '';

  constructor(private enrollmentService: EnrollmentService) {

  }

  topics = ['Java', 'Angular', 'SpringBoot', 'AWS', 'Docker', 'ReactJS']
  topicHasError = true;
  userobj = new User('Rob', 'rob@test.com', 100, 'default', 'morning', true);

  validateTopic(value: string) {
    if (value === 'default') {
      this.topicHasError = true;
    }
    else {
      this.topicHasError = false;
    }
  }

  onSubmit(userForm: any) {
    console.log(userForm)
    this.submitted = true;
    this.enrollmentService.enroll(this.userobj).subscribe(data => console.log('Success!', data),
      error => this.errorMsg=error.statusText
   )
  }
  
}
