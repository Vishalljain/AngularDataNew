import { Component, Input, OnChanges, OnInit, OnDestroy, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-lifecycle-example',
  templateUrl: './lifecycle-example.component.html',
  styleUrl: './lifecycle-example.component.css'
})
export class LifecycleExampleComponent {
  @Input() title!: string;
  @Input() content!: string;

 

 

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
  constructor() {
    console.log('Constructor called');
  }
  ngOnChanges() {
    console.log('ngOnChanges called');
  }
}

