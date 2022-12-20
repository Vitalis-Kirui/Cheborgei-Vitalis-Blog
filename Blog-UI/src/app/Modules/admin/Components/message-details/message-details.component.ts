import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from 'src/app/Services/messages.service';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.css']
})
export class MessageDetailsComponent implements OnInit {

  // Message object
  message: any = {};

  constructor(private messageService: MessagesService, private route:ActivatedRoute) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id');

    // Fetching the message
    this.messageService.getSingleMessage(id)
      .subscribe(data => {
        this.message = data.message;
        console.log(data);
      },
        error => {
          console.log(error);
        }
      )

  }

}
