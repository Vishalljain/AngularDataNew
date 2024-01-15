import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private baseUrl = "http://localhost:8080//api/excel";
  constructor(private http: HttpClient) { }

  processFiles(formData: any): Observable<any> {
    console.log("inside"+formData.textFileName)
    return this.http.post("http://localhost:8080/api/excel/process", formData);
  }

  processExcel(data: any): Observable<String> {
  //  In the function processExcel(data: any): Observable<string>, any and string represent the data types of the function's input parameter and the return type, respectively.data: any: This part of the function signature means that the data parameter can be of any data type.Using any as the data type for a parameter essentially allows you to pass any type of data to the function.It provides maximum flexibility but may require you to handle different data types within the function.This is often used when the function can accept a wide range of input data.Observable<string>: This part of the function signature specifies the return type of the function.It indicates that the function will return an observable stream of data where each element in the stream is of type string.An Observable is a type in RxJS used for handling asynchronous data streams, and in this case, it's expected to emit and handle strings.
    console.log(":inside")
       //  const headers = new HttpHeaders({
       //'Content-Type': 'application/json' // Change this to 'text/plain'
      // 'Content-Type': 'text/plain'
      //});
    //const options = { headers };

    // return this.http.post<string>(`${this.baseUrl}/dataFile`, data);
    return this.http.post<string>("http://localhost:8080/api/excel/dataFile1", data, { responseType: 'text' as 'json' });

    //The <String> type is not specifying the type of the request or response; it's specifying the type of the data that will be returned in the response from the HTTP request. It means that you are telling TypeScript that you expect the response data to have an "any" type, which essentially means the data could be of any type.
  }
}
//c:\users\ixl1kor\angularworkspace\demo\src\app\file-service.service.ts
