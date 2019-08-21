import { HttpInterceptor,HttpHandler,HttpEvent,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private router:Router){}
    intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>>
    {
     if(req.headers.get('No-Auth') == "True")
     {
        return next.handle(req.clone());
     }   

     if(window.sessionStorage.getItem('userToken')!=null){
        const clonedReq=req.clone({
          headers:req.headers.set("Authorization","Bearer " +window.sessionStorage.getItem('userToken'))
         });
         return next.handle(clonedReq);
     }
     else{
      this.router.navigateByUrl("/Login");
     }
    }
}