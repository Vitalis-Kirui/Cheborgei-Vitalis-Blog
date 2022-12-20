import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/Services/messages.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  // Message array
  messages: any = [];

  // New messages array
  newMessages: any = [];

  constructor(private messageService : MessagesService, private router: Router) { }

  ngOnInit() {

    // Getting all messages
    this.messageService.getAllMessages()
      .subscribe(data => {
        this.messages = data.messages;
        console.log(data);
      },
        error => {
          console.log(error);
        }
      )

      // Fetching new messages
    this.messageService.getNewMessages()
      .subscribe(data => {
        this.newMessages = data.messages;
        console.log(data);
      },
        error => {
          console.log(error);
        }
      )

  }

  // Opening messages function
  openMessage(id: any) {
    this.router.navigate(['admin/messages/message/' + id]);
  }

}
