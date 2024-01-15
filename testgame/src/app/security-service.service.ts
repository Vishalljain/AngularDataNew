import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityServiceService {
  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string) {
    const headers = new HttpHeaders({
      
      Authorization: 'Basic ' + btoa(username + ':' + password)
    });
    console.log(headers,"----")
    // Replace 'your-api-endpoint' with the actual endpoint of your Spring Boot backend
    return this.http.get('http://localhost:8080/hello', { headers });
  }

  getHi(): Observable<string> {
    return this.http.get<string>('http://localhost:8080/hi', { responseType: 'text' as 'json' });
  }
  
}
