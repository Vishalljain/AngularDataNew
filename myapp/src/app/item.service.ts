import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseUrl = 'http://localhost:9111';

  constructor(private http: HttpClient) {}

  filterItems(userInput: string): Observable<string[]> {
    console.log("userinput",userInput)
    const url = `${this.baseUrl}/api/items/filter?userInput=${userInput}`;
    return this.http.get<string[]>(url);
  }
}