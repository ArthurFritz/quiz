import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { LoadingService } from './loading.service';
import { Router } from '@angular/router';
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";
import { MatDialog } from '@angular/material';
import { ErrorModelComponent } from './error-model/error-model.component';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private dialog: MatDialog, private _router: Router, private _loadingService: LoadingService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap(next => {
                this._loadingService.finishRequest();
            },
                (error: HttpErrorResponse) => {
                    this._loadingService.finishRequest();
                    if (error.url.endsWith("/api/auth/signin")) {
                        this.openDialog({ code: 401, message: "Login e senha inválidos" });
                        this._router.navigate(["/login"]);
                    } else if (error.status === 401) {
                        this.openDialog({ code: 401, message: "Sessão expirada" });
                        this._router.navigate(["/login"]);
                    } else {
                        let message = error.error.message ? error.error.message : error.message;
                        if(error.error && error.error.errors){
                            let info = error.error.errors[0];
                            message = `${info.defaultMessage} - field ${info.field}`
                        }
                        this.openDialog({ code: error.status, message: message })
                    }
                }
            ));
    }

    private openDialog(info) {
        this.dialog.open(ErrorModelComponent, {
            data: info
        });
    }
}