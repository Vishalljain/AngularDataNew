import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';
  success_msg = false

  contacts = [
    {
      'firstName': 'Devops',
      'lastName': 'Tutorial',
      'ContatctId':12345
    },
    {
      'firstName': 'Angular',
      'lastName': 'Class',
      'ContatctId': 12345
    },
    {
      'firstName': 'Java',
      'lastName': 'Class',
      'ContatctId': 12345
    },
    {
      'firstName': 'SpringBoot Microservices',
      'lastName': 'Class',
      'ContatctId': 12345
    },
    {
      'firstName': 'AWS AZURE',
      'lastName': 'Class',
      'ContatctId': 12345
    }

  ]

  colVal="2"

  jkl="hello"


  superPower = 'SpiderMan'
  tax = 100

  styleProp = 'red'

  txtColor = 'blue'

  styleCsProp = 'c3'

  sayHello() {
    console.log("hello from arc tutorials")
  }

  highlightBgColor(a: any, b: any, c: any, d: any, e: any) {
    console.log("hello" + a+ b + c+d+e);

  }

  month = 11
  userName = "vishal"

  name = "vishal L Jain"

  lowerCaseEx = "ABC DEF"
  jsonCaseEx = { username: "vishal L", salary: 123456789 }

  dateEx = Date.now()

  currencyEx=125
}
