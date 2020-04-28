import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from './character';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  characters$(): Observable<Character[]> {
    return this.http.get<any>(`${environment.baseUrl}people`).pipe(
      map(res => res.results)
    );
  }

  character$(id: string): Observable<Character> {
    return this.http.get<any>(`${environment.baseUrl}people/${id}`);
  }
}
