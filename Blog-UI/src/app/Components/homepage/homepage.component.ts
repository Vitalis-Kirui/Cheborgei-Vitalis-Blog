import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  // Suggestion form
  suggestionForm! : FormGroup;

  constructor(private fbService : FormBuilder) { }

  ngOnInit() {

    this.suggestionForm = this.fbService.group({
      title: ['', [Validators.required]],
      category: ['', [Validators.required]],
      blog: ['', [Validators.required]],
    });
  }

  submitSuggestion() {
    console.log(this.suggestionForm.value)

    this.suggestionForm.reset();
  };

}
