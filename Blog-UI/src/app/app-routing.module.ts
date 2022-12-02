import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutBlogComponent } from './Components/about-blog/about-blog.component';
import { BlogDetailsComponent } from './Components/blog-details/blog-details.component';
import { ContactMeComponent } from './Components/contact-me/contact-me.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {path: 'blogs/blog/:id', component:BlogDetailsComponent},
  { path: 'about-blog', component: AboutBlogComponent },
  {path : 'contact-me', component : ContactMeComponent},
  { path: 'authentications', loadChildren: () => import('./Modules/authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: 'admin', loadChildren: () => import('./Modules/admin/admin.module').then(m => m.AdminModule) },
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
