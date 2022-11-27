import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  // Verify boolean properties
  verified: boolean = false;

  // Error message
  errorMessage:boolean = false;
  
  // Form properties
  verifyForm!: FormGroup;

  constructor(private fbService: FormBuilder, private router : Router) { }
  
  // Getter function
  get passcode() {
    return this.verifyForm.get('passcode');
  }

  ngOnInit() {

    // form model
    this.verifyForm = this.fbService.group({
      passcode : [, Validators.required]
    });

  }

  // Verify function
  verify() {

    let userCode = this.verifyForm.value.passcode;

    if (userCode !== environment.adminPasscode) {
      this.errorMessage = true;      
      this.verified = false;
      this.verifyForm.reset();

    }
    else {
      this.verified = true;
      this.errorMessage  = false;
      this.verifyForm.reset();
    }
    
  }

}
