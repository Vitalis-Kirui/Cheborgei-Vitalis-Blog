import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesService } from 'src/app/Services/messages.service';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.css']
})
export class MessageDetailsComponent implements OnInit {

  // Message object
  message: any = {};

  constructor(private messageService: MessagesService, private route:ActivatedRoute, private router : Router) { }

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

  // Delete message function
  deleteMessage() {
    let id = this.route.snapshot.paramMap.get('id');

    // Deleting message
    this.messageService.deleteMessage(id)
      .subscribe(data => {
        console.log("Message deleted successfully");
        
        this.router.navigate(['admin/messages']);
      },
        error => {
          console.log("Error deleting message", error);
        }
      )
    
  }

}
