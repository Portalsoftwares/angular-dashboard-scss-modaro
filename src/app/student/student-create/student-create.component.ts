import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss']
})
export class StudentCreateComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
  student!: Student ;
  addFormStudent: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.min(10), Validators.max(100)]),
  });

  constructor() {

  }

  addStudent() {
    if (this.addFormStudent.valid) {
      this.student = this.addFormStudent.value;
      console.log(this.student);
    } else {
      // Handle form validation errors
      console.log('Form is invalid');
    }
  }



}
