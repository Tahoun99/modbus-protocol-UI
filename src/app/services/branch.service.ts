import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BranchService {
  private apiURL: string = 'http://localhost:5145/api';

  constructor(private http: HttpClient) {}

  getBranch(): Observable<any> {
    return this.http.get(`${this.apiURL}/Branch`);
  }
}
