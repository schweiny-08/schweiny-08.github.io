import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Project } from 'src/project';
import { PROJECTS } from 'src/mock-projects';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projectsUrl = 'api/projects';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl).pipe(
      tap((_) => this.log('fetched heroes')),
      catchError(this.handleError<Project[]>('getProject', []))
    );
  }

  private log(message: string) {
    console.log(`ProjectService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.log(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
