import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

type DATA = {
  pageNumber: number;
  deviceId?: number;
};

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private messageSubject = new Subject<DATA>();
  message$ = this.messageSubject.asObservable();

  constructor() {}

  sendMessage(pageNumber: number, deviceId?: number) {
    this.messageSubject.next({ pageNumber, deviceId });
  }
}
