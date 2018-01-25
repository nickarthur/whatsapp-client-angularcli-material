import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const auth = localStorage.getItem('Authorization');
    if (auth) {
      request = request.clone({
        setHeaders: {
          Authorization: auth,
        }
      });
    }
    return next.handle(request);
  }
}
