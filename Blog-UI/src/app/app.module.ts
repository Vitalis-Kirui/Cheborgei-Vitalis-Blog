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
import { ArchirvesComponent } from './Components/archirves/archirves.component';
import  {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptorService } from './Services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    AboutBlogComponent,
    ContactMeComponent,
    NotFoundComponent,
    BlogDetailsComponent,
    ArchirvesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
    
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
