import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeviceNavigationService {
  private messageSubject = new Subject<number>();
  message$ = this.messageSubject.asObservable();

  constructor() {}

  sendId(id: number) {
    this.messageSubject.next(id);
  }
}
