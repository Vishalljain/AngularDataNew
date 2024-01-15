import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent {
  @Output()
  increment = new EventEmitter<void>();
  @Output()
  decrement = new EventEmitter<void>();
  @Output()
  reset = new EventEmitter<void>();

  onIncrement() {
    console.log(this.increment)
    this.increment.emit();
  }
  onDecrement() {
    this.increment.emit();
  }
  onReset() {
    this.increment.emit();
  }

}
