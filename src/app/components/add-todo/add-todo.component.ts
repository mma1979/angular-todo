import {Component, EventEmitter, Output} from '@angular/core';
import {ListItemModel} from "../../model/list-item-model";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  taskDescription: string="";
  @Output() onItemAdded: EventEmitter<ListItemModel> = new EventEmitter();

  addTask(){
    let task:ListItemModel = {
      id: crypto.randomUUID(),
      description: this.taskDescription,
      isDone: false
    }

    this.onItemAdded.emit(task);
    this.taskDescription = "";
  }


}
