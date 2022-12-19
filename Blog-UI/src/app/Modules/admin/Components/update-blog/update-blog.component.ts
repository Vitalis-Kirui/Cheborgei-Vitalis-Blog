import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {

  // Form
  updateForm !: FormGroup;

   // Categories
  categories: any = ['General Software Engineering', 'MEAN Stack', 'Angular', 'React Js', 'MongoDB', 'NodeJS', 'ExpressJS','Python','Others']

  constructor() { }

  ngOnInit(): void {
  }

  // Change category event function
  changeCategory(event : any) {
    
  }

  // Update form form function
  updateBlog() {
    
  }

}
