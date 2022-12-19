import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from 'src/app/Services/blogs.service';

@Component({
  selector: 'app-archirving',
  templateUrl: './archirving.component.html',
  styleUrls: ['./archirving.component.css']
})
export class ArchirvingComponent implements OnInit {

  // Blog object
  blog: any = [];

  // Archirve form
  archirveForm!: FormGroup;

  // Categories
  categories: any = ['General Software Engineering', 'MEAN Stack', 'Angular', 'React Js', 'MongoDB', 'NodeJS', 'ExpressJS', 'Python', 'Others']

  constructor(private blogService : BlogsService, private route : ActivatedRoute, private fbService: FormBuilder) { }

  ngOnInit() {

    // Form model
    this.archirveForm = this.fbService.group({
      image: [''],
      title: [''],
      category: [''],
      description: [''],
      status: ['']
    })

    let id = this.route.snapshot.paramMap.get('id');

    this.blogService.getSingleBlog(id)
      .subscribe(data => {
        this.blog = data.blog;
        console.log(data);

        // Patching values
        this.archirveForm.patchValue({
          image: this.blog.image,
          title: this.blog.title,
          category: this.blog.category,
          description: this.blog.description,
          status: "in-active"
        })
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
    return this.archirveForm.get('category');
  }

  // submit function
  archirveBlog() {
    console.log(this.archirveForm.value);
  }

}
