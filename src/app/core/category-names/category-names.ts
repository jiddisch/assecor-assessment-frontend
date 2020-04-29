import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryNamesService {

  constructor(private http: HttpClient) { }

  getCategoryNames$(url: string, type: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map((res) => {
        const id = url.split('/').filter(Boolean).pop();
        return { name: res.name, id, type };
      })
    );
  }
}
