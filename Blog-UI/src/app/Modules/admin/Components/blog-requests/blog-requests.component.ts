import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogRequestService } from 'src/app/Services/blog-request.service';

@Component({
  selector: 'app-blog-requests',
  templateUrl: './blog-requests.component.html',
  styleUrls: ['./blog-requests.component.css']
})
export class BlogRequestsComponent implements OnInit {

  // Request array
  requests: any = [];
  
  // New request array
  newRequest: any = [];

  constructor(private blogRequestService: BlogRequestService, private router : Router) { }

  ngOnInit() {

    // Getting all requests
    this.blogRequestService.getAllRequest()
      .subscribe(data => {
        this.requests = data.requests;
        console.log(data);
      },
        error => {
          console.log(error);
        }
    )
    
    // Getting new requests
    this.blogRequestService.getNewRequests()
      .subscribe(data => { 
        this.newRequest = data.blogRequests;
        console.log(data);
      },
        error => {
          console.log(error);
        }
      )

  }

  // Open request function
  openRequest(id : any) {
    this.router.navigate(['admin/blog-requests/blog-request', id]);
  }

}
