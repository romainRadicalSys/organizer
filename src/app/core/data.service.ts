import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
// import 'rxjs/add/observable/map';
// import 'rxjs/add/observable/catch';

import { map } from 'rxjs/operators';

import { ITodo } from '../shared/interfaces';
import { IProject } from '../shared/interfaces';

@Injectable()
export class DataService {
  //baseUrl: string = 'api/getTodos';
  baseUrl: string = './mocks/todos.json';
  projectAPI: string = './mocks/todoProject.json'
  constructor(private http: Http) { }

  getTodos(id: number): Observable<ITodo[]> {
    return this.http.get(this.baseUrl).pipe(
      map((res: Response) => {
        console.log('res/////');
        console.log(res.json());

        let todos = res.json();
        let todoFiltered = todos.filter(todo => todo.projectID == id)

        console.log(todoFiltered);
        return todoFiltered;
      })
    );
  }

  getTodoProject(): Observable<IProject[]> {
    return this.http.get(this.projectAPI).pipe(
      map((res: Response) => {
        let projects = res.json();
        console.log(projects);
        return projects;
      })
    );
  }

  insertTodo(todo: ITodo): Observable<ITodo> {

    return this.http.post('api/addTodo', todo).pipe(
      map((res: Response) => {
        const data = res.json();
        console.log('insert new todo');
        return data.todo;
      })
    )
  }

  handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
