import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  link = 'http://localhost:3000/api/Users/login';

  constructor(
    private http: HttpClient
  ) { }

  login(credentials): Observable<any> {
    return this.http.post<any>(this.link, credentials);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLogged() {
    return !! localStorage.getItem('token');
  }
}
