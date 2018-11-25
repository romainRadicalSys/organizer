import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/data.service';
import { ITodo } from '../shared/interfaces';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  title: string;
  todos: ITodo[] = [];
  newtodo = {
    name: "",
    comments: ""
  }
  showNewTodo: boolean = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.title = 'Todos';
    this.getTodos();

    // this.dataService.getTodos().subscribe((data: ITodo[]) =>
    //   this.todos = data);

  }

  showNewTodoSection(): void {
    this.showNewTodo = !this.showNewTodo;
  }

  submit() {
    console.log(this.newtodo);
    console.log(this.newtodo);
    this.dataService.insertTodo(this.newtodo)
      .subscribe((todos: ITodo) => {
        this.showNewTodo = false;
        this.newtodo = {
          name: "",
          comments: ""
        }
        this.getTodos();
      })

  }


  getTodos() {
    this.dataService.getTodos().subscribe(
      (todos: ITodo[]) => {
        this.todos = todos;
      },
      (err: any) => console.log(err),
      () => console.log('getTodos retrieved todos')
    );
  }
}
