import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
//TODO: Rechercher la librairie Angular pour remplacer rxjs

@Injectable()
export class UserService {

  private usersUrl: string;

  private handleError(error: Error, errorValue:any) {
    console.log(errorValue);
    return of(errorValue);
  }

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<any> {
    return this.http.get(this.usersUrl).pipe(catchError((error) => this.handleError(error, undefined)));
  }
}