import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input()
  todos: any;
  newTodo: string;

  editTodo(data) {
    console.log('data');
    console.log(data);

  }


  constructor() { }

  ngOnInit() {

  }
}
