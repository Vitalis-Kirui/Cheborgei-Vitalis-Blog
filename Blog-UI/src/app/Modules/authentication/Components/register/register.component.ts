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

}
