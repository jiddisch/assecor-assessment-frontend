import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from './film';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) {}

  films$(): Observable<Film[]> {
    return this.http.get<any>(`${environment.baseUrl}films`).pipe(
      map(res => res.results)
    );
  }

  film$(id: string): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}films/${id}`);
  }
}
