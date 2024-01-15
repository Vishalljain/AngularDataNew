import { OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  
  @Input()
  counter: any;

  ngOnInit(): void {
    console.log(this.counter)
  }

  


}
