import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm!.valid) {
      const { username, password } = this.loginForm!.value;
      if (username === 'admin' && password === 'password123') {
        this.router.navigateByUrl('/dashboard/student/studentCreate');
      } else {
        this.errorMessage = 'Invalid username or password.<br>Please try again.';
        this.loginForm.reset();

      }
    } else {
      this.errorMessage = 'Please fill in all required fields.';
      this.loginForm.reset();
    }
  }
}
