import { Component } from '@angular/core';


interface Item {
  id: number;
  title: string;
  description: string;
  details: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tooltip';

  items: Item[] = [
    { id: 1, title: 'Item 1', description: 'Description for Item 1', details: 'Details for Item 1' },
    { id: 2, title: 'Item 2', description: 'Description for Item 2', details: 'Details for Item 2' },
    { id: 3, title: 'Item 3', description: 'Description for Item 3', details: 'Details for Item 3' },
  ];
  selectedItem!: Item;
  addItem() {
    const newItem: Item = {
      id: this.items.length + 1,
      title: `Item ${this.items.length + 1}`,
      description: `Description for Item ${this.items.length + 1}`,
      details: `Details for Item ${this.items.length + 1}`
    };
    this.items.push(newItem);
    console.log(this.items.length)
  }

  selectItem(item: Item) {
    console.log(item)
    this.selectedItem = item;
  }
  editItem(item: Item) {
    console.log(item)
    this.selectedItem = item
    if (this.selectedItem) {
      console.log(this.selectedItem)
      const updatedItem = prompt(`Enter new title for "${item.title}"`)?.trim();
      if (updatedItem) {
        this.selectedItem.title = updatedItem;
      }
    }
  }

  }


