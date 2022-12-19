import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { BlogsService } from 'src/app/Services/blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  // Blog form
  blogForm !: FormGroup;

  // Running blogs array
  runningBlogs : any = [];

  // Categories
  categories: any = ['General Software Engineering', 'MEAN Stack', 'Angular', 'React Js', 'MongoDB', 'NodeJS', 'ExpressJS','Python','Others']

  constructor(private fbService: FormBuilder,
    private adminService: AdminService,
    private blogService: BlogsService,
  private router : Router) { }

  ngOnInit() {
    // Form model
    this.blogForm = this.fbService.group({
      image: [''],
      title: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['',[Validators.required]],
      status: ['', [Validators.required]]
    })

    // Getting running blogs
    this.blogService.getActiveBlogs()
      .subscribe(data => {
        this.runningBlogs = data.activeBlogs;
        console.log(data)
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

  // Open blog
  openBlog(id: any) {
    this.router.navigate(['admin/blogs/blog/' + id]);
  }

  // Update blog
  updateBlog(id : any) {
    this.router.navigate(['admin/blogs/update-blog/' +id]);
  }

  // Deleting a blog function
  deleteBlog(id: any) { 
    this.blogService.deleteBlog(id)
      .subscribe(success => {
        console.log("Blog deleted successfully")
        
        window.location.reload()
      },
        error => {
          console.log("Error deleting the blog", error);
        }
      )
  }

  // Archirving blog function
  archirveBlog(id: any) {
    this.router.navigate(['admin/blogs/blog/archirve/'+id]);
  }

}
