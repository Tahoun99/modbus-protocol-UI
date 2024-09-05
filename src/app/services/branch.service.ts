import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Branch } from '../models/branch-model'; // Assuming you have a Branch model

@Injectable({
  providedIn: 'root',
})
export class BranchService {
  private apiURL: string = 'http://localhost:5145/api';

  constructor(private http: HttpClient) {}

  getBranches(): Observable<Branch[]> {
    return this.http.get<Branch[]>(`${this.apiURL}/Branch`);
  }
}