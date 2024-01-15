import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  @ViewChild(ChildComponent) childComponent!: ChildComponent;

  messageToChild = 'Hello from Parent!';

  ngAfterViewInit() {
    // This lifecycle hook is called after the view and child component are initialized
    console.log('Child Component:', this.childComponent);
    console.log(this.childComponent.hello)
  }

  sendMessageToChild() {
    this.messageToChild = 'Updated Message from Parent!';
    
  }
}
