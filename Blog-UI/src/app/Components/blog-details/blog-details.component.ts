import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from 'src/app/Services/blogs.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  // Blog object
  blog: any = {};

  constructor(private route : ActivatedRoute, private blogService : BlogsService) { }

  ngOnInit() {

    // Fetching single blog
    let id = this.route.snapshot.paramMap.get('id');

    this.blogService.getSingleBlog(id)
      .subscribe(data => {
        this.blog = data.blog;
        console.log(data);
        })

  }

}
