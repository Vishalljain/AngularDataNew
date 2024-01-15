
import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {

  clientLists = [
    {clientId:10,firstName:'Raj',lastName:'Malotra'},
    {clientId: 11, firstName: 'Anmol', lastName: 'Jain'},
    {clientId: 12, firstName: 'Nihal', lastName: 'Chopra'}
  ];

}
