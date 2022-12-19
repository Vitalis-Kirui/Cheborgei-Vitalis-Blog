import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

  // Creating a new blog
  postBlog(blog: any) {
    return this.http.post<any>(environment.createBlogUrl, blog);
  }

  // Getting all users
  getAllUsers(): Observable<any> { 
    return this.http.get<any>(environment.allUsersUrl);
  };

  // Getting new users
  getNewUsers(): Observable<any> {
    return this.http.get<any>(environment.newUsersUrl);
  }
}
