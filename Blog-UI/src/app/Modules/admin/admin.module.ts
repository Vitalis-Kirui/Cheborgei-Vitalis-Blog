import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './Components/users/users.component';
import { BlogsComponent } from './Components/blogs/blogs.component';
import { BlogDetailsComponent } from './Components/blog-details/blog-details.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageDetailsComponent } from './Components/message-details/message-details.component';
import { MessageComponent } from './Components/message/message.component';
import { BlogRequestsComponent } from './Components/blog-requests/blog-requests.component'


@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    BlogsComponent,
    BlogDetailsComponent,
    UserDetailsComponent,
    MessageDetailsComponent,
    MessageComponent,
    BlogRequestsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
