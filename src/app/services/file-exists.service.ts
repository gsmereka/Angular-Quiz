import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FileExistsService {

  constructor(private httpClient: HttpClient) {}

  fileExistsService(url: string): Observable<boolean> {
    return this.httpClient.head(url).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
}
