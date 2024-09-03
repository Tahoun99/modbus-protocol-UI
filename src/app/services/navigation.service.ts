import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private messageSubject = new Subject<number>();
  message$ = this.messageSubject.asObservable();

  constructor() {}

  sendMessage(pageNumber: number) {
    this.messageSubject.next(pageNumber);
  }
}
