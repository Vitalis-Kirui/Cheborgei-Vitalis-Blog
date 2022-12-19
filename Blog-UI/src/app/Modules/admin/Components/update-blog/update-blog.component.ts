import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from 'src/app/Services/blogs.service';


@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {

  // Form
  updateForm !: FormGroup;

   // Categories
  categories: any = ['General Software Engineering', 'MEAN Stack', 'Angular', 'React Js', 'MongoDB', 'NodeJS', 'ExpressJS', 'Python', 'Others']
  
  // Existing blog data
  existingBlog: any = {};

  constructor(private fbService: FormBuilder,
    private blogService: BlogsService,
  private route : ActivatedRoute) { }

  ngOnInit() {
    // Form model
    this.updateForm = this.fbService.group({
      image: [''],
      title: [''],
      category: [''],
      description: [''],
      status: ['']
    })

    // Fetching and patching existing data
    let id = this.route.snapshot.paramMap.get('id');

    this.blogService.getSingleBlog(id)
      .subscribe(data => { 
        this.existingBlog = data.blog;
        console.log(data);

        // Patching values
        this.updateForm.patchValue({

          image: this.existingBlog.image,
          title: this.existingBlog.title,
          category: this.existingBlog.category,
          description: this.existingBlog.description,
          status: this.existingBlog.status
        })

      },
        
        error =>{
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
    return this.updateForm.get('category');
  }

  // Update form form function
  updateBlog() {
    console.log(this.updateForm.value);
  }

}
