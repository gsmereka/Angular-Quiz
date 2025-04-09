import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonLoaderService {
  constructor(private http: HttpClient) {}

  loadJsonFile(fileUrl: string): Observable<any> {
    return this.http.get<any>(fileUrl);
  }
}
