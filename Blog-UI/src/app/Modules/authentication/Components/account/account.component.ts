import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  // User information
  userDetails: any = {};

  constructor(private accountService: AuthenticationService) { }

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

}
