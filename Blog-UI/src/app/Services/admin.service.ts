import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

}
