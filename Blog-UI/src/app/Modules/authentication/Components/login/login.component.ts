import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Login form 
  loginForm!: FormGroup;

  constructor(private router: Router, private fbService : FormBuilder, private loginService: AuthenticationService) { }
  
  // Switching to registration page
  switchRegister() {
    this.router.navigate(['authentications/register']);
  }

  // Getter functions
  // Username
  get username() {
    return this.loginForm.get('username');
  }

  // password
  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit() {
    this.loginForm = this.fbService.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  // Login function
  loginUser() {
    console.log(this.loginForm.value)

    // Passing data to login endpoint
    this.loginService.loginUser(this.loginForm.value)
      .subscribe((data) => {
        let token = data.token;
        localStorage.setItem('token', token);

        // Navigating to homepage
        this.router.navigate(['/']);
      },
        error => {
          // Getting error response
          if (error instanceof HttpErrorResponse) {
            if (error.status === 404) {
              console.log("User not found")
            }
            else if (error.status === 401) {
              console.log("Wrong  password")
            }
            else {
              console.log(error);
            }
          }
        }
      )

  }

}
