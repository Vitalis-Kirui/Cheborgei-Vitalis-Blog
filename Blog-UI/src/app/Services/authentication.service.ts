import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http : HttpClient, private router : Router) { }

  // Register functionality
  registerUser(user: any) { 
    return this.http.post<any>(environment.registerUrl, user)
  };

  // Login User
  loginUser(user: any) { 
    return this.http.post<any>(environment.loginUrl, user);
  };

  // Checking login status
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  // Logging out User
  logoutUser() { 
    localStorage.removeItem('token');

    this.router.navigate(['/']);
  };

  // User profile/account
  getUserProfile(): Observable<any> { 
    return this.http.get(environment.userProfileUrl)
  };

}
