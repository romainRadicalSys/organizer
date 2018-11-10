import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
// import 'rxjs/add/observable/map';
// import 'rxjs/add/observable/catch';

import { map } from 'rxjs/operators';

import { ITodo } from '../shared/interfaces';

@Injectable()
export class DataService {
  baseUrl: string = 'api/getTodos';
  constructor(private http: Http) {}

  getTodos(): Observable<ITodo[]> {
    return this.http.get(this.baseUrl).pipe(
      map((res: Response) => {
        let todos = res.json();
        console.log(todos);
        return todos;
      })
    );
  }
}
