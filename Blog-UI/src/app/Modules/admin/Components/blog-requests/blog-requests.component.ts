import { Component, OnInit } from '@angular/core';
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

  constructor(private blogRequestService: BlogRequestService) { }

  ngOnInit() {

    // Getting all requests
    this.blogRequestService.getAllRequest()
      .subscribe(data => {
        this.requests = data.blogRequests;
        console.log(data);
      },
        error => {
          console.log(error);
        }
    )
    
    // Getting new requests
    this.blogRequestService.getNewRequests()
      .subscribe(data => { 
        this.newRequest = data.requests;
        console.log(data);
      },
        error => {
          console.log(error);
        }
      )

  }

  // Open request function
  openRequest(id : any) {
    
  }

}
