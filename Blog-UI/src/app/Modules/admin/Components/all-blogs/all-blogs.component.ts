import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/Services/blogs.service';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent implements OnInit {

  // Blog array
  blogs: any = [];

  constructor(private blogService : BlogsService) { }

  ngOnInit() {

    this.blogService.getAllBlogs()
      .subscribe(data => {
        this.blogs = data.blogs;
        console.log(this.blogs);
      },
        error => {
          console.log(error);
        }
      )
  }

}
