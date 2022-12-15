import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  // User information
  userDetails: any = {};

  constructor(private accountService: AuthenticationService, private router : Router) { }

  ngOnInit() {
    // Fetching user information
    this.accountService.getUserProfile()
      .subscribe((userData) => {
        this.userDetails = userData.user;
        console.log(userData);
      },
        error => {
          console.log(error);
        }
      )

  }

  // Update data navigation
  updateDetails() {
    this.router.navigate(['/authentications/update-details']);
  }

}
