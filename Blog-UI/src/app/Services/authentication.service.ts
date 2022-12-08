import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http : HttpClient) { }

  // Register functionality
  registerUser(user: any) { 
    return this.http.post<any>(environment.registerUrl, user)
  };

  // Login User
  loginUser(user: any) { 
    return this.http.post<any>(environment.loginUrl, user);
  };

}
