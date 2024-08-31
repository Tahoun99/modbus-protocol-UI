import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  private apiURL: string = 'http://localhost:5145/api';

  constructor(private http: HttpClient) {}

  getDevices(): Observable<any> {
    return this.http.get(`${this.apiURL}/Device`);
  }

  getDevice(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/Device/${id}`);
  }

  addDevice(data: {}): Observable<any> {
    return this.http.post(`${this.apiURL}/Device`, data);
  }

  updateDevice(id: number, data: {}): Observable<any> {
    return this.http.put(`${this.apiURL}/Device/${id}`, data);
  }
}
