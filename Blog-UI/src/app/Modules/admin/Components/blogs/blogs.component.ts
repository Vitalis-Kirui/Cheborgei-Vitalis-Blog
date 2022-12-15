import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  // Blog form
  blogForm !: FormGroup;

  // Categories
  categories: any = ['General Software Engineering', 'MEAN Stack', 'Angular', 'React Js', 'MongoDB', 'NodeJS', 'ExpressJS','Python','Others']

  constructor( private fbService : FormBuilder) { }

  ngOnInit() {
    // Form model
    this.blogForm = this.fbService.group({
      image: [''],
      title: [''],
      category: [''],
      description: [''],
      status: ['']
    })
  }

  // Submitting the blog
  submitBlog() {
    console.log(this.blogForm.value);
  }

}
