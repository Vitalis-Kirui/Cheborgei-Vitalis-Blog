import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public service: AuthenticationService) { }
  
  // Logout function
  logoutUser() {
    this.service.logoutUser();
  }

  ngOnInit(): void {
  }

}
