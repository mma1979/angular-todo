import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ListItemModel} from "../../model/list-item-model";

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {

  @Input() item: ListItemModel= <ListItemModel>{};
  @Output() onItemDelete: EventEmitter<ListItemModel> = new EventEmitter<ListItemModel>();

  removeItem(){
    this.onItemDelete.emit(this.item);
  }
}
