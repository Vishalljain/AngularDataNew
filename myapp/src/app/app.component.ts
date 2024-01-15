import {  Component, ElementRef, ViewChild } from '@angular/core';
import { ItemService } from './item.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userInput: string = '';
  filteredItems: string[] = [];
  selectedItem: string = '';

  constructor(private itemService: ItemService) {}

  filterItems() {
    this.itemService.filterItems(this.userInput).subscribe(
      (items) => {
        console.log(items)
        this.filteredItems = items;
        this.selectedItem = items.length > 0 ? this.selectedItem : '';
        console.log(this.filterItems,"data")
      },
      (error) => console.error('Error filtering items:', error)
    );
  }
}
