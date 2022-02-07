import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resp } from './interfaces';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  basePath: string = 'http://localhost:8080/backendSRBS/scripts/';
  // basePath: string = 'https://app-dev.online/backendSRBS/scripts/';
  // basePath: string = 'http://52.63.82.10/backendSRBS/scripts/';
  // basePath = 'assets/backendSRBS/scripts/';
  // basePath = 'assets/backendSRBS/scripts/';
  constructor(private http: HttpClient, private router: Router) {}

  authUser(data: any): Observable<Resp[]> {
    console.log(data);
    return this.http.post<Resp[]>(this.basePath + 'auth.php', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
  LoggedUserData() {
    let token = localStorage.getItem('token');
    if (!token) {
      console.log('error ...');
    } else {
      let decodedString = atob(token);
      let str = JSON.parse(decodedString);
      return str;
      // console.log('Token @navbar : ', str);
    }
  }

  logout() {
    console.log('logout success...');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
