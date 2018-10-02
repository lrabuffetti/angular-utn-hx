import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private information = ['something', 'else', 'to', 'get'];

  constructor(private http: HttpClient) { }

  public getInformation() {
    return this.information;
  }

  public getDataFromService(): Observable<any> {
    return this.http.get<any>('http://demo7092324.mockable.io/work-experience').pipe(
      tap(data => console.log(data))
    );
  }
}
