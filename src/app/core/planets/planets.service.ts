import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planet } from './planet';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  planets$(): Observable<Planet[]> {
    return this.http.get<any>(`${environment.baseUrl}planets`).pipe(
      map(res => res.results)
    );
  }

  planet$(id: string): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}planets/${id}`);
  }
}
