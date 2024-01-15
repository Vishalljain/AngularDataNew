import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularMaterial1';

  clickCoordinates: { x: number, y: number }= { x: 0, y: 0 };;



  deleteHero() {
    console.log('Deleting hero (Without $event)');
  }

  deleteHeroWithEvent(event: MouseEvent) {
    console.log('Deleting hero (With $event)');
    console.log('Event details:', event);
    this.clickCoordinates={x:event.clientX,y:event.clientY}
  }
}
