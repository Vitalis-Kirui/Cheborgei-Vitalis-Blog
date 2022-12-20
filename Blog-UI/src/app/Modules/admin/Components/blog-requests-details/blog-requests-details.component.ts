import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogRequestService } from 'src/app/Services/blog-request.service';

@Component({
  selector: 'app-blog-requests-details',
  templateUrl: './blog-requests-details.component.html',
  styleUrls: ['./blog-requests-details.component.css']
})
export class BlogRequestsDetailsComponent implements OnInit {

  // request object
  blogRequest: any = [];

  constructor(private blogRequestService: BlogRequestService, private route :ActivatedRoute, private router: Router) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id');

    // Fetching blog request
    this.blogRequestService.getSingleRequest(id)
      .subscribe(data => {
        this.blogRequest = data.requests;
        console.log(data);
      },
        error => {
          console.log(error);
        }
      )


  }

  // delete function
  deleteBlogRequest(id: any) {

    this.blogRequestService.deleteRequest(id)
      .subscribe(data => {
        console.log("Blog request deleted successfully");

        this.router.navigate(['admin/blog-requests'])

      },
        error => {
          console.log(error);
        }
      )
    
  }

}
