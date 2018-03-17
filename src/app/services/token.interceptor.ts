import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    // Se configura el interceptor que va a usar en todas las Req Http
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = {
            Authorization: 'Hasra sakjdkjaskdj'
        }
        const newReq = req.clone({
            setHeaders: headers
        })

        return next.handle(newReq)
    } 
    constructor() {}

    
}