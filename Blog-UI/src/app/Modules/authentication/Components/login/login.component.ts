import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Login form 
  loginForm!: FormGroup;

  constructor(private router: Router, private fbService : FormBuilder) { }
  
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
  }

}
