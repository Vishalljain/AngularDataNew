import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  hello:string="hi"
  @Input() messageFromParent!: string;
}

/*
Yes, in the provided example, the communication from the parent component to the child component is achieved using an Input property. The messageFromParent property in the ChildComponent is marked with the @Input() decorator, allowing the parent component to bind a value to this property in the template.
*/