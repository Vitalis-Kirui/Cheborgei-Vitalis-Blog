import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http: HttpClient) { }

  // Gett all the blogs
  getAllBlogs(): Observable<any>{
    return this.http.get(environment.getAllBlogsUrl)
  }

  // Getting active blogs
  getActiveBlogs(): Observable<any>{
    return this.http.get(environment.getActiveBlogsUrl)
  }

  // Getting last 24 hours blogs
  getNewBlogs(): Observable<any> {
    return this.http.get(environment.getNewBlogsUrl)
  }

  // Opening a single blog
  getSingleBlog(id : any): Observable<any> {
    return this.http.get(environment.getSingleBlogUrl+id);
  }

  // Updating a blog
  updateBlog(id:any, blog: any) {
    return this.http.put<any>(environment.updateBlogUrl+id, blog);
  }

}
