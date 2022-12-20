import { Component, OnInit } from '@angular/core';
import { BlogRequestService } from 'src/app/Services/blog-request.service';

@Component({
  selector: 'app-blog-requests',
  templateUrl: './blog-requests.component.html',
  styleUrls: ['./blog-requests.component.css']
})
export class BlogRequestsComponent implements OnInit {

  // Request array
  requests:any = [];

  constructor(private blogRequestService: BlogRequestService) { }

  ngOnInit() {

    this.blogRequestService.getAllRequest()
      .subscribe(data => {
        this.requests = data.request;
        console.log(data);
        })

  }

}
