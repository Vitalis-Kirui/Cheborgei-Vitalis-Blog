import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Form declarations
  registrationForm !: FormGroup;

  constructor(private router: Router, private fbService : FormBuilder) { }
  
  // Swiching user to login page
  switchLogin() {
    this.router.navigate(['authentications/login']);
  }

  // Fields getter functions
  // First name getter function
  get firstname() {
    return this.registrationForm.get('firstname');
  }

  // Last name getter function
  get lastname() {
    return this.registrationForm.get('lastname');
  }

  // Username getter function
  get username() {
    return this.registrationForm.get('username');
  }

  // Email getter function
  get email() {
    return this.registrationForm.get('email');
  }

  // Subscription getter
  get subscribe() {
    return this.registrationForm.get('subscribe');
  }

  // Password getter function
  get password() {
    return this.registrationForm.get('password');
  }

    //Confirm Password getter function
  get confirmpassword() {
    return this.registrationForm.get('confirmpassword');
  }
  ngOnInit() {
    this.registrationForm = this.fbService.group({

      firstname: ['', Validators.required],
      lastname :['', Validators.required],
      username :['', Validators.required],
      email: ['', Validators.required],
      subscribe:[false],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]

    })

  }

  // Submit function
  submitDetails() {
    console.log(this.registrationForm.value)
  };

}
