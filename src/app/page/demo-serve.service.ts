import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RebirthHttp } from 'rebirth-http';
import { Subject, Observable, BehaviorSubject ,  } from 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class DemoServeService extends RebirthHttp {
  debounceTime$ = new Subject<any>();
  constructor(http: HttpClient) {
    super(http);
  }
}
