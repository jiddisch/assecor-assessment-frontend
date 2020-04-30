import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { Character } from './character';
import { environment } from 'src/environments/environment';
import { map, switchMap, catchError } from 'rxjs/operators';
import { CategoryNamesService } from '../category-names/category-names';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient, private categoryNamesService: CategoryNamesService) { }

  characters$(): Observable<Character[]> {
    return this.http.get<any>(`${environment.baseUrl}people`).pipe(
      map(res => res.results)
    );
  }

  character$(id: string): Observable<Character> {
    return this.http.get<any>(`${environment.baseUrl}people/${id}`).pipe(
      switchMap((res: Character) => {
        const films = res.films.map((val) =>
          this.categoryNamesService.getCategoryNames$(val, 'films')
        );

        return forkJoin([...films]).pipe(
          map((res1) => {
            return {
              ...res,
              filmsCategoryNames: res1.filter(val => val.type === 'films'),
            };
          }),
          catchError(() => of(null))
        );
      })
    );
  }

}
