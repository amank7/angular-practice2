import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppwideService {
  dataTransferUsingSubject = new Subject<string>();

  constructor() {}

  dataTransferMethod(value: string) {
    this.dataTransferUsingSubject.next(value);
  }
}
