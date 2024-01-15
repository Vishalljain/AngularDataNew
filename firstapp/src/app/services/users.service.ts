import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  name: String;
  email: String;
  phoneNumber: number;
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  deleteUser(id: number): Observable<Object> {
    return this.http.delete('https://jsonplaceholder.typicode.com/users/' + id);
  }

  //Put API

  UpdateUser() {
    const body = {
      name: 'tutorial',
      userId: 1
    }; 
    return this.http.put('https://jsonplaceholder.typicode.com/users/1', body)
    
  }


  //POST API

  addUser(body: { title: any; body: any; }) {
    
    return this.http.post('https://jsonplaceholder.typicode.com/users', body)
  }



  //Get API data
  getUsers(): Observable<User> {

    const headers2 = new HttpHeaders({
      'content-type': 'application/json',
      'authenticationToken': '012345678910'
    });

    const params2  = new HttpParams()
      .set('pageSize', 10)
      .set('pageOptions',100)

    return this.http.get<User> ('https://jsonplaceholder.typicode.com/users', { headers: headers2, params: params2 });
    /*
    const usrs = [
      { id: 1, un: 'u' },
      { id: 2, un: 'utube' },

    ];
    
    return usrs;
    */
  }
}
