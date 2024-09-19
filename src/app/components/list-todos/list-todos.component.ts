import {Component, Input} from '@angular/core';
import {ListItemComponent} from "../list-item/list-item.component";
import {ListItemModel} from "../../model/list-item-model";

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [
    ListItemComponent
  ],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent {

  @Input() items: ListItemModel[] = [];

  deleteItem($event: ListItemModel) {
    let itemIndex = this.items.indexOf($event);
    this.items.splice(itemIndex, 1);
  }
}
