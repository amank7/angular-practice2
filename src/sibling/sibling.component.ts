import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { AppwideService } from '../appwide.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css'],
  standalone: true,
  imports: [HttpClientModule],
})
export class SiblingComponent implements OnInit {
  dataViaSubject: string;
  countries: any;
  name = 'India';
  constructor(
    private appWideService: AppwideService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.appWideService.dataTransferUsingSubject.subscribe((data) => {
      this.dataViaSubject = data;
    });

    const promise = new Promise((resolve, reject) => {
      console.log('Promise triggered anyways');
      let count = 5;
      setTimeout(() => {
        if (count === 5) {
          resolve('Promise Fulfilled!');
          resolve('Promise Fulfilled!');
          resolve('Promise Fulfilled!');
          resolve('Promise Fulfilled!');
          resolve('Promise Fulfilled!');
          resolve('Promise Fulfilled!');
        }
        reject('Promise rejected!');
      }, 2000);
    });

    promise.then((data) => console.log(data));
    // promise.catch((error) => console.log(error.message));

    const observable = new Observable((subscribableData) => {
      setTimeout(() => {
        console.log('Observable only triggered when we subscribe');

        subscribableData.next('Observable emits Data1!');
        subscribableData.next('Observable emits Data2!');
        subscribableData.next('Observable emits Data3!');
        subscribableData.next('Observable emits Data4!');
        subscribableData.next('Observable emits Data5!');
        subscribableData.next('Observable emits Data6!');
      }, 1000);
    });
    //.pipe(
    //   filter((data, ci, arr) => {
    //     if (data === 'Observable emits Data5!') {
    //       return data;
    //     }
    //   })
    // );

    observable.subscribe((data) => {
      console.log(data);
    });

    // this.http.get('https://restcountries.com/v3.1/all').subscribe((data) => {
    //   console.log(data);
    //   // this.countries = data;
    // });

    // this.http
    //   .get(`https://restcountries.com/v3.1/name/${this.name}`)
    //   .subscribe((data) => console.log(data));

    this.http
      .get(`https://restcountries.com/v3.1/name/${this.name}`, {
        params: new HttpParams().set('fullText', 'true'),
      })
      .subscribe((data) => console.log(data));

    // console.log(this.countries);
  }
}
