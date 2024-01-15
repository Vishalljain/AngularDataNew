import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  id= 0;
  name= '';
  isDirty = true;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      this.name = params['name'];
      console.log(params)//http://localhost:4200/search?id=100
      //http://localhost:4200/search?id=100&name=vishal
    });
  }


}
