import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/Services/blogs.service';

@Component({
  selector: 'app-archirves',
  templateUrl: './archirves.component.html',
  styleUrls: ['./archirves.component.css']
})
export class ArchirvesComponent implements OnInit {

  // Blogs array
  allBlogs: any = [];

  constructor(private blogService : BlogsService) { }

  ngOnInit() {

    // Getting all blogs
    this.blogService.getAllBlogs()
      .subscribe(data => {

        this.allBlogs = data.blogs;
        console.log(data);
          
        })

  }

}
