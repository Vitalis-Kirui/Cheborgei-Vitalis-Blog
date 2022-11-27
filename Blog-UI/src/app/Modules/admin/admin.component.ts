import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  // Verify boolean properties
  verified: boolean = false;
  
  // Form properties
  verifyForm!: FormGroup;

  constructor(private fbService : FormBuilder) { }

  ngOnInit() {

    // form model
    this.verifyForm = this.fbService.group({
      passcode : [, Validators.required]
    });

  }

  // Verify function
  verify() {
    console.log(this.verifyForm.value);
    this.verified = true;
  }

}
