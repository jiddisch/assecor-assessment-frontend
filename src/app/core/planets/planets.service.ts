import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { Planet } from './planet';
import { environment } from 'src/environments/environment';
import { map, switchMap, catchError } from 'rxjs/operators';
import { CategoryNamesService } from '../category-names/category-names';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient, private categoryNamesService: CategoryNamesService) { }

  planets$(): Observable<Planet[]> {
    return this.http.get<any>(`${environment.baseUrl}planets`).pipe(
      map(res => res.results)
    );
  }

  planet$(id: string): Observable<Planet> {
    return this.http.get<any>(`${environment.baseUrl}planets/${id}`).pipe(
      switchMap((res: Planet) => {
        console.log(res);

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
