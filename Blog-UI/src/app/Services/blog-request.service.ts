import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogRequestService {

  constructor(private http: HttpClient) { }
  
  // creating a blog request
  createBlogRequest(blogRequest: any) {
    return this.http.post<any>(environment.createRequestUrl, blogRequest);
  }

  // Fetching all request
  getAllRequest(): Observable<any>{
    return this.http.get<any>(environment.getAllRequestsUrl);
  }

  // Fetching single request
  getSingleRequest(id: any): Observable<any> {
    return this.http.get<any>(environment.getSingleRequestsUrl+id);
  }

  // Fetching new request
  getNewRequests(): Observable<any> {
    return this.http.get<any>(environment.getTodayRequestsUrl);
  }

  // Delete request
  deleteRequest(id: any) {
    return this.http.delete<any>(environment.deleteRequestUrl+id);
  }

}
