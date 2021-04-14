import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class ErrorStorage {
    public status?: number;
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private errorStorage: ErrorStorage
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError((err: HttpErrorResponse) => {
            this.errorStorage.status = err.status;
            return throwError(err);
        }));
    }
}
