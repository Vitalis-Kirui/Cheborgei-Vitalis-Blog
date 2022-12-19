import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/Services/messages.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  // Message array
  messages: any = [];

  constructor(private messageService : MessagesService) { }

  ngOnInit() {

    this.messageService.getAllMessages()
      .subscribe(data => {
        this.messages = data.messages;
        console.log(data);
      },
        error => {
          console.log(error);
        }
      )

  }

}
