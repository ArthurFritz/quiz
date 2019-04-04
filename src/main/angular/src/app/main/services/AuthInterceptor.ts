import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private _loadingService:LoadingService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = sessionStorage.getItem("token");
        const headers = token ? req.headers.set('Content-Type', 'application/json').append("Authorization","Bearer " + token)
                              : req.headers.set('Content-Type', 'application/json');
            const authReq = req.clone({ headers });
            this._loadingService.addRequest();
            return next.handle(authReq);
    }

}