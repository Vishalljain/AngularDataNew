import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InputOutput';
}


/*
In your example, [messageFromParent]="messageToChild" is a property binding. It binds the value of the messageToChild 
property of the parent component to the messageFromParent input property of the child component.

In your example, (messageToParent)="receiveMessageFromChild($event)" is an event binding.
 It binds the messageToParent output event of the child component to the receiveMessageFromChild method of the parent component.

[] is used for passing data from the parent to the child through property binding.
() is used for listening to events emitted by the child and executing a method or expression in the parent component.
Together, these two mechanisms allow for two-way communication between parent and child components in Angular. The data flows from parent to child through property binding, and events are emitted from child to parent through event binding.
*/