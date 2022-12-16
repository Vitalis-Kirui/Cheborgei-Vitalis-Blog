import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';

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

  constructor( private fbService : FormBuilder, private adminService: AdminService) { }

  ngOnInit() {
    // Form model
    this.blogForm = this.fbService.group({
      image: [''],
      title: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['',[Validators.required]],
      status: ['', [Validators.required]]
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
    return this.blogForm.get('category');
  }

  // Submitting the blog
  submitBlog() {
    console.log(this.blogForm.value);

    this.adminService.postBlog(this.blogForm.value)
      .subscribe(data => { 
        console.log("Blog successfully created");
        console.log(data);
        this.blogForm.reset();
      },
        error => {
          console.log(error);
        }
      );

  }

}
