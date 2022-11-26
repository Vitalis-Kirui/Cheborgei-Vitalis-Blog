import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forbiddenTermsValidator } from 'src/app/Validators/forbidden-terms';
import { passwordMatchValidator } from 'src/app/Validators/password-match';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Form declarations
  registrationForm !: FormGroup;

  // Email rexgex pattern
  emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

  // User subscription
  userSubscribed: boolean = false;

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

      firstname: ['', [Validators.required, Validators.minLength(3),
        forbiddenTermsValidator(/admin/), forbiddenTermsValidator(/porn/), forbiddenTermsValidator(/you/),
      forbiddenTermsValidator(/sex/), forbiddenTermsValidator(/fuck/)]],
      lastname: ['', [Validators.required, Validators.minLength(3),
      forbiddenTermsValidator(/admin/), forbiddenTermsValidator(/porn/), forbiddenTermsValidator(/you/),
      forbiddenTermsValidator(/sex/), forbiddenTermsValidator(/fuck/)]],
      username: ['', [Validators.required, Validators.minLength(3),
      forbiddenTermsValidator(/admin/), forbiddenTermsValidator(/porn/), forbiddenTermsValidator(/you/),
      forbiddenTermsValidator(/sex/), forbiddenTermsValidator(/fuck/)]],
      email: ['', [Validators.pattern(this.emailRegEx)]],
      subscribe:[false],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required]]

    },
      {validator : passwordMatchValidator}
    )

    // Email conditional validation
    this.subscribe?.valueChanges
      .subscribe((checkedValue) => {

        // Getting email address
        const email = this.email;

        if (checkedValue) {
          this.userSubscribed = true;
            email?.setValidators([Validators.required, Validators.pattern(this.emailRegEx)])
        }
        else {
          this.userSubscribed = false;
          email?.clearValidators();
          email?.setValidators([Validators.pattern(this.emailRegEx)])
        }
        email?.updateValueAndValidity();
        })
  }
  

  // Submit function
  submitDetails() {
    console.log(this.registrationForm.value)
  };

}
