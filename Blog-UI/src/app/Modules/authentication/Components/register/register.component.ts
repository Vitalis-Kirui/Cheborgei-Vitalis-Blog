import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }
  
  // Swiching user to login page
  switchLogin() {
    this.router.navigate(['authentications/login']);
  }

  ngOnInit(): void {
  }

}
