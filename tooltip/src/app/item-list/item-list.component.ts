import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Item {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})



export class ItemListComponent {
  items: Item[] = [
    { id: 1, name: 'Item 1', description: 'Description for Item 1' },
    { id: 2, name: 'Item 2', description: 'Description for Item 2' },
    { id: 3, name: 'Item 3', description: 'Description for Item 3' },
  ];


}
