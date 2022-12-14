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
import { BlogRequestsComponent } from './Components/blog-requests/blog-requests.component';
import { BlogRequestsDetailsComponent } from './Components/blog-requests-details/blog-requests-details.component';
import { AllBlogsComponent } from './Components/all-blogs/all-blogs.component';
import { UpdateBlogComponent } from './Components/update-blog/update-blog.component';
import { ArchirvingComponent } from './Components/archirving/archirving.component'


@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    BlogsComponent,
    BlogDetailsComponent,
    UserDetailsComponent,
    MessageDetailsComponent,
    MessageComponent,
    BlogRequestsComponent,
    BlogRequestsDetailsComponent,
    AllBlogsComponent,
    UpdateBlogComponent,
    ArchirvingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
