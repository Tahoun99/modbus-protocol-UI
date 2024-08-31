import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReadingsService {
  private apiURL: string = 'http://localhost:5145/api';

  constructor(private http: HttpClient) {}

  getReadings(id: number): Observable<any> {
    const params = new HttpParams().set('DivId', `${id}`);

    return this.http.get(
      `${this.apiURL}/readinglkp/ActualReading/GetDivActualReadings`,
      {
        params,
      }
    );
  }

  getReadingsLookups(): Observable<any> {
    return this.http.get(`${this.apiURL}/readinglkp/ReadingLPK`);
  }
}
