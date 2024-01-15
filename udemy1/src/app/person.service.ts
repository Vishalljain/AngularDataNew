import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:9111/api/persons';

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.apiUrl}/getAllPersons`);
  }

  savePerson(person: Person): Observable<Person> {
    return this.http.post<Person>(`${this.apiUrl}/savePerson`, person);
  }

  getPersonById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}/getPerson/${id}`);
  }

  savePersonRes(person: Person): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/savePersonNew`, person, { responseType: 'text' as 'json' });
  }

}
