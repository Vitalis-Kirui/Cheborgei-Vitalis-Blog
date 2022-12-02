import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutBlogComponent } from './Components/about-blog/about-blog.component';
import { ContactMeComponent } from './Components/contact-me/contact-me.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogDetailsComponent } from './Components/blog-details/blog-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    AboutBlogComponent,
    ContactMeComponent,
    NotFoundComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
