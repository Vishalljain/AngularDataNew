import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() messageFromParent!: string;
  @Output() messageToParent = new EventEmitter<string>();

  sendMessageToParent() {
    const newMessage = 'Hello from Child!';
    this.messageToParent.emit(newMessage);
  }
}
