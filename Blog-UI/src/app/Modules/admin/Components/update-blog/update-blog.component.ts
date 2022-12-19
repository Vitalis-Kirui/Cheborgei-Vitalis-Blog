import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private fbService : FormBuilder) { }

  ngOnInit() {
    // Form model
    this.updateForm = this.fbService.group({
      image: [''],
      title: [''],
      category: [''],
      description: [''],
      status: ['']
    })
  }

// Changes in the dropdown list
  changeCategory(event: any) {
    this.category?.setValue(event.target.value, {
      onlySelf: true,
    });
  }
  
  // Access formcontrols getter
  get category() {
    return this.updateForm.get('category');
  }

  // Update form form function
  updateBlog() {
    
  }

}
