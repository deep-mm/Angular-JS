import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ait';
  age = 10.1;
  name = 'Deep';
  today = Date.now();
  value = 'Clear Me';
  topicHasError = true;

  topics = ['MongoDB', 'Express', 'Angular', 'Node'];

  userModel = new User('', 'dmm7@live.in', 9004096152, 'Angular', true);

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  constructor(private _enrollmentService: EnrollmentService) {}

  onSubmit(){
    console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('Success!',data),
      error => console.log('Error!',error)
    );
  }
}
