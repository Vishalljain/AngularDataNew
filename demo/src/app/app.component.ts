import { Component } from '@angular/core';
import { FileService } from './file-service.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formData: any = { textFileName: '', excelFileName: '' };
 // response: string | undefined;

  constructor(private fileService: FileService) { }

  /*
  onSubmit(): void {
    this.fileService.processFiles(this.formData).subscribe(
      data => {
        console.log(data)
        alert('Files processing successful.');
      },
      error => {
        console.error(error);
        alert('Error processing files.');
      }
    );
  }
   */

  
  onSubmit(): void {
    this.fileService.processExcel(this.formData).subscribe(
      data => {
        console.log(data)
        alert(data);
      },
      error => {
        console.error(error);
        alert('Error processing files.');
      }
    );
    
  }
    

  


  /*

  onSubmit(): void {
    this.fileService.processExcel(this.formData)
      .pipe(
        catchError(error => {
          console.error(error);
          // Handle the error and display a more meaningful error message to the user
          alert('Error processing files. Please check your input and try again.');
          return of(null); // Return a valid observable to prevent the error from propagating
        })
      )
      .subscribe(data => {
        if (data) {
          console.log(data);
          alert('Files processing successful.');
        }
      });
  }
  */
  
}
