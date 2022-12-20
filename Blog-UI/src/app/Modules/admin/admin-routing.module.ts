import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AllBlogsComponent } from './Components/all-blogs/all-blogs.component';
import { ArchirvingComponent } from './Components/archirving/archirving.component';
import { BlogDetailsComponent } from './Components/blog-details/blog-details.component';
import { BlogRequestsDetailsComponent } from './Components/blog-requests-details/blog-requests-details.component';
import { BlogRequestsComponent } from './Components/blog-requests/blog-requests.component';
import { BlogsComponent } from './Components/blogs/blogs.component';
import { MessageDetailsComponent } from './Components/message-details/message-details.component';
import { MessageComponent } from './Components/message/message.component';
import { UpdateBlogComponent } from './Components/update-blog/update-blog.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'all-blogs', component: AllBlogsComponent },
  {path: 'blogs/blog/archirve/:id', component : ArchirvingComponent},
  {path: 'blogs/update-blog/:id', component: UpdateBlogComponent},
  { path: 'blogs/blog/:id', component: BlogDetailsComponent },
  { path: 'blog-requests', component: BlogRequestsComponent },
  { path: 'blog-requests/blog-request/:id', component: BlogRequestsDetailsComponent },
  { path: 'messages', component: MessageComponent },
  {path: 'messages/message/:id', component: MessageDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
