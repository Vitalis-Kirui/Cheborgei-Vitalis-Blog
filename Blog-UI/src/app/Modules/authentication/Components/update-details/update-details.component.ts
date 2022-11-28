import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenTermsValidator } from 'src/app/Validators/forbidden-terms';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {

  // Registration information
  registered: boolean = false;

  // Form declarations
  updateForm!: FormGroup;

  // Email regex pattern
  emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

  constructor(private service: FormBuilder) { }

  // GETTER FUNCTIONS
  // First name
  get firstname() {
    return this.updateForm.get('firstname');
  };

  // Last name
  get lastname() {
    return this.updateForm.get('lastname');
  };

  // Username
  get username() {
    return this.updateForm.get('username');
  };

  // Phone number
  get phonenumber() {
    return this.updateForm.get('phonenumber');
  };

  // Email
  get email() {
    return this.updateForm.get('email');
  };

  // Subscribe
  get subscribe() {
    return this.updateForm.get('subscribe');
  };

  ngOnInit() {

    this.updateForm = this.service.group({
      firstname: ['', [Validators.minLength(3), forbiddenTermsValidator(/admin/), forbiddenTermsValidator(/porn/), forbiddenTermsValidator(/nameless/)]],
      lastname: ['', [Validators.minLength(3), forbiddenTermsValidator(/admin/), forbiddenTermsValidator(/porn/), forbiddenTermsValidator(/nameless/)]],
      username: ['', [Validators.minLength(3), forbiddenTermsValidator(/admin/), forbiddenTermsValidator(/porn/), forbiddenTermsValidator(/nameless/)]],
      phonenumber: ['', [Validators.minLength(10)]],
      email: ['', [Validators.pattern(this.emailRegEx)]],
      subscribe: false,
    }
    )

    // Email conditional validation
    //subscribing to checkbox
    this.updateForm.get('subscribe')?.valueChanges
      .subscribe((checkedvalue) => {

        // getting email field
        const email = this.email;

        if (checkedvalue) {
          email?.setValidators([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
        }
        else {
          email?.clearValidators()
          email?.setValidators([Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
        }
        email?.updateValueAndValidity();
      })

  }

  // Submit form function
  submitForm() {
    
    console.log(this.updateForm.value);

  }
}