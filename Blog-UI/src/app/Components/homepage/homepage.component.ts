import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  // Categories
  categories: any = ['General Software Engineering', 'MEAN Stack', 'Angular', 'React Js', 'MongoDB', 'NodeJS', 'ExpressJS','Python','Others']

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

    // Changes in the dropdown list
  changeCategory(event: any) {
    this.category?.setValue(event.target.value, {
      onlySelf: true,
    });
  }
  
  // Access formcontrols getter
  get category() {
    return this.suggestionForm.get('category');
  }

  submitSuggestion() {
    console.log(this.suggestionForm.value)

    this.suggestionForm.reset();
  };

}
