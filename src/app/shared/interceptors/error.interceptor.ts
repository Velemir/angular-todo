import {Observable, throwError} from 'rxjs';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {SharedService} from '../services/shared.service';

@Injectable({ providedIn: 'root' })
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private shared: SharedService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(catchError(err => {
      this.handleError(err);
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }

  private handleError(error: HttpErrorResponse) {

    if (!navigator.onLine) {
      this.shared.errorNotification('Connection error');
    }

    if (error.status === 404) {
      console.log('Not found');
      this.shared.errorNotification('Request was not found on the server');
    }

    if (error.status === 500) {
      this.shared.errorNotification('Internal Server Error');
    }

  }
}
