import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessagesService } from 'src/app/Services/messages.service';
import { forbiddenTermsValidator } from 'src/app/Validators/forbidden-terms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  // Form declarations
  contactForm !: FormGroup;

  // Email validation expression
  emailRegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

  constructor(private fbService: FormBuilder, private messageService: MessagesService) { }
  
     // Getter functions
  // email address
  get email(){
    return this.contactForm.get('email');
  }

  // message
  get message(){
    return this.contactForm.get('message');
  }

  ngOnInit() {

    // Form model
    this.contactForm = this.fbService.group({
      email: ['', [Validators.required, Validators.pattern(this.emailRegExp)]],
      message: ['', [Validators.required, forbiddenTermsValidator(/porn/),
      forbiddenTermsValidator(/fuck/), forbiddenTermsValidator(/sex/)]]
    })

  }

  // Submit form
  submit() {
    console.log(this.contactForm.value);

    this.messageService.sendMessage(this.contactForm.value)
      .subscribe(sent => {
        console.log("Message sent successfully");
      },
        error => {
          console.log("Error sending message", error);
        }
      )

    this.contactForm.reset();
  }

}
