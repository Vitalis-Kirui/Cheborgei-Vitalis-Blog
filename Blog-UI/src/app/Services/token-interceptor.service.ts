import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector : Injector) { }

  intercept(req: any, next: any) {

    let service = this.injector.get(AuthenticationService)

    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${service.getToken()}`
      }
    });

    return next.handle(tokenizedReq);
    
  }
}
