import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { BackendService } from './../../services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userId: string = '';
  passwd: string = '';
  invalidLogin: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private backendService: BackendService
  ) {}

  login(m: any) {
    let data = {
      userId: m.userId,
      passwd: m.passwd,
    };
    this.authService.authUser(data).subscribe((resp: any) => {
      if (resp) {
        // let mySplitResult = resp.split('.');
        // let loginData = mySplitResult[1];
        // let decodedString = atob(loginData);
        // let str = JSON.parse(decodedString);
        // localStorage.setItem('token', loginData);
        // console.log('Response :', str);
        if (resp) {
          this.router.navigate(['/dashboard']);
        }
      } else {
        this.invalidLogin = true;
      }
    });
  }
  login_logo: string = '';
  ngOnInit(): void {
    this.login_logo = this.backendService.getImagePath();
  }
}
