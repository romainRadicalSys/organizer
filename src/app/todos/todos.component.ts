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
  showNewTodo: boolean = false;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.title = 'Todos';
    this.getTodos();
  }

  showNewTodoSection(): void {
    this.showNewTodo = !this.showNewTodo;
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
