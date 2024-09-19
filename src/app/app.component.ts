import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {AddTodoComponent} from "./components/add-todo/add-todo.component";
import {ListTodosComponent} from "./components/list-todos/list-todos.component";
import {ListItemModel} from "./model/list-item-model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AddTodoComponent, ListTodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
  allTodos: ListItemModel[] = []

  itemAdded($event: ListItemModel) {
    this.allTodos = [...this.allTodos, $event];
  }
}
