import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // All users array
  allUsers: any = [];

  // New users array
  newUsers: any = [];

  constructor(private adminService: AdminService) { }

  ngOnInit() {

    // All users function
    this.adminService.getAllUsers()
      .subscribe(data => { 
        this.allUsers = data.users;
        console.log(data);
      },
        error => {
          console.log(error);
        }
    )
    
    // New users function
    this.adminService.getNewUsers()
      .subscribe(data => { 
        this.newUsers = data.users;
        console.log(data);
      },
        error => {
          console.log(error);
        }
      );

  }

}
