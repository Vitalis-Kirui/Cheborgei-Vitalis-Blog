import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogsService } from 'src/app/Services/blogs.service';

@Component({
  selector: 'app-archirves',
  templateUrl: './archirves.component.html',
  styleUrls: ['./archirves.component.css']
})
export class ArchirvesComponent implements OnInit {

  // Blogs array
  allBlogs: any = [];
  
  constructor(private blogService : BlogsService, private router : Router) { }

  ngOnInit() {

    // Getting all blogs
    this.blogService.getAllBlogs()
      .subscribe(data => {

        this.allBlogs = data.blogs;
        console.log(data);
          
        })

  }

    // Open blog
  openBlog(id: any) {
    this.router.navigate(['/blogs/blog/',id]);
   }

}
