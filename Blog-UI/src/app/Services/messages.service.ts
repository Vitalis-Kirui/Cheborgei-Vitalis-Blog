import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }
  
  // creating a new message
  sendMessage(message: any) {
    return this.http.post<any>(environment.createMessageUrl, message)
  }

  // Fetching all messages
  getAllMessages(): Observable<any> {
    return this.http.get<any>(environment.getAllMessagesUrl);
  }

  // fetching new messages
  getNewMessages(): Observable<any> {
    return this.http.get<any>(environment.getTodayMessagesUrl);
  }

  // getting a single message
  getSingleMessage(): Observable<any> {
    return this.http.get<any>(environment.getTodayMessagesUrl);
  }

  // Deleting messages
  deleteMessage(id: any) {
    return this.http.delete<any>(environment.deleteMessageUrl, id);
  }

}
