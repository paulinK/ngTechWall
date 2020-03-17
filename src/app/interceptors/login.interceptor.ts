import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, ɵHttpInterceptingHandler, HttpParams
} from '@angular/common/http';


export class LoginInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');
    // console.log("TOKEN : ", token);
    if (token) {
      const keys = req.params.keys();
      let params = new HttpParams();
      // console.log("KEYS : ", keys);
      for (let index = 0; index < keys.length; index++) {
        console.log(index);
        params = params.append(keys[index], req.params.get(keys[index]));
      }
      params = params.append('access_token', token);
      const clonereq = req.clone({
        params// : new HttpParams().set('access_token', token)
      });
      console.log(params);
      return next.handle(clonereq);
    }
    return next.handle(req);
  }
}

export const LoginInterceptorProvider = {
  provide : HTTP_INTERCEPTORS,
  useClass: LoginInterceptor,
  multi: true
};
