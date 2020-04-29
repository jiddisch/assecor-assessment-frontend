import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { Film } from './film';
import { environment } from 'src/environments/environment';
import { map, switchMap, catchError } from 'rxjs/operators';
import { CategoryNamesService } from '../category-names/category-names';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  constructor(private http: HttpClient, private categoryNamesService: CategoryNamesService) {}

  films$(): Observable<Film[]> {
    return this.http
      .get<any>(`${environment.baseUrl}films`)
      .pipe(map((res) => res.results));
  }

  film$(id: string): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}films/${id}`).pipe(
      switchMap((res: Film) => {
        const characters = res.characters.map((val) =>
          this.categoryNamesService.getCategoryNames$(val, 'characters')
        );

        const planets = res.planets.map((val) => {
          return this.categoryNamesService.getCategoryNames$(val, 'planets');
        });

        return forkJoin([...characters, ...planets]).pipe(
          map((res1) => {

            return {
              ...res,
              charactersCategoryNames: res1.filter(val => val.type === 'characters'),
              planetsCategoryNames: res1.filter(val => val.type === 'planets'),
            };
          }),
          catchError(() => of(null))
        );
      })
    );
  }
}
