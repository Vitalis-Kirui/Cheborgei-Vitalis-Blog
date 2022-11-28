import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from 'src/app/Validators/password-match';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  // Update form declaration
  updateForm! : FormGroup;

  constructor(private fbService: FormBuilder) { }
  
  // Getter functions
  // oldpassword
  get oldpassword() {
    return this.updateForm.get('oldpassword');
  }

  // New password
  get newpassword() {
    return this.updateForm.get('password');
  }

  // Confirm new password
  get confirmnewpassword() {
    return this.updateForm.get('confirmpassword');
  }

  ngOnInit() {
    this.updateForm = this.fbService.group({
      oldpassword: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required]]
    },
      {validator : passwordMatchValidator}
    );
  }

  // Update password function
  updatePassword() {

    console.log(this.updateForm.value)
    this.updateForm.reset();
    
  }

}