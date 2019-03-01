import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/data.service';
import { ITodo } from '../shared/interfaces';
import { IProject } from '../shared/interfaces';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  title: string;
  todos: ITodo[] = [];
  opened: boolean;
  todoProject: IProject[] = [];
  newtodo = {
    name: "",
    comments: ""
  }
  showFiller = true;
  id: number;
  showNewTodo: boolean = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.title = 'Todos';
    this.getTodos(this.id);
    this.getTodoProject();

    // this.dataService.getTodos().subscribe((data: ITodo[]) =>
    //   this.todos = data);

  }

  showNewTodoSection(): void {
    this.showNewTodo = !this.showNewTodo;
  }

  submit(id: number) {
    console.log(this.newtodo);
    console.log(this.newtodo);
    this.dataService.insertTodo(this.newtodo)
      .subscribe((todos: ITodo) => {
        this.showNewTodo = false;
        this.newtodo = {
          name: "",
          comments: ""
        }
        this.getTodos(id);
      })

  }


  getTodos(id: number) {
    this.dataService.getTodos(id).subscribe(
      (todos: ITodo[]) => {
        this.todos = todos;
      },
      (err: any) => console.log(err),
      () => console.log('getTodos retrieved todos')
    );
  }

  getTodoProject() {
    this.dataService.getTodoProject().subscribe(
      (todoProject: IProject[]) => {
        this.todoProject = todoProject;
      },
      (err: any) => console.log(err),
      () => console.log('getTodos retrieved todos')
    );
  }
}
