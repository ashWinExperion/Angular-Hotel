import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {


  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Interseptor here");
    //tokken variable
    let tokenVal= sessionStorage.getItem('JwtTOKEN');

    if(sessionStorage.getItem('USERNAME')&& sessionStorage.getItem('JwtTOKEN')){

      request=request.clone({
        setHeaders:{
         Authorization:"Bearer "+ tokenVal
        }
      })
    }
    return next.handle(request);
  }
}
