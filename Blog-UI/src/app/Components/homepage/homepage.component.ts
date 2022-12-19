import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogsService } from 'src/app/Services/blogs.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  // Categories
  categories: any = ['General Software Engineering', 'MEAN Stack', 'Angular', 'React Js', 'MongoDB', 'NodeJS', 'ExpressJS','Python','Others']

  // Suggestion form
  suggestionForm!: FormGroup;
  
  // Active blogs array
  activeBlogs : any = [];

  // New blogs array
  newBlogs : any = [];

  constructor(private fbService : FormBuilder, private blogService: BlogsService, private router : Router) { }

  ngOnInit() {

    // Form model
    this.suggestionForm = this.fbService.group({
      title: ['', [Validators.required]],
      category: ['', [Validators.required]],
      blog: ['', [Validators.required]],
    });

    // Active blogs
    this.blogService.getActiveBlogs()
      .subscribe(data => {
        this.activeBlogs = data.activeBlogs;
        console.log(data);
          
      },
        error => {
          console.log(error);
        }
    )
    
    // Fetching new blogs
    this.blogService.getNewBlogs()
      .subscribe(data => {
        this.newBlogs = data.blogs;
        console.log(data);
      },
        error => {
          console.log(error);
        }
      )

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

  // Submitting suggestion
  submitSuggestion() {
    console.log(this.suggestionForm.value)

    // creating a new suggestion
    

    this.suggestionForm.reset();
  };

  // Open blog
  openBlog(id: any) {
    this.router.navigate(['/blogs/blog/',id]);
   }

}
