import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {

  constructor(private router: Router, private service: AuthenticationService) { }

  canActivate(): any {
  
    if (this.service.loggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['authentication/login']);
      return false;
    }
  
  }
}
