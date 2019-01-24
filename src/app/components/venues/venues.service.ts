import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VenuesService {

  constructor(private http: HttpClient) { }

  public getVenues(): Observable<any> {
    return this.http
      .get(`${environment.apiUrl}/?client_id=${environment.clientId}&client_secret=${environment.clientSecret}&v=20170903&near=Dublin,Ireland&section=trending&price=2,3&limit=20`)
      .pipe(
        map(res => res),
        catchError(error => observableThrowError(error))
      );
  }
}
