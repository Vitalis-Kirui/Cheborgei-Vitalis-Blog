import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BlogDetailsComponent } from './Components/blog-details/blog-details.component';
import { BlogsComponent } from './Components/blogs/blogs.component';
import { MessageDetailsComponent } from './Components/message-details/message-details.component';
import { MessageComponent } from './Components/message/message.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blog/:id', component: BlogDetailsComponent },
  { path: 'messages', component: MessageComponent },
  {path: 'messages/:id', component: MessageDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
