// import { Component, OnInit, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BackendService } from './../../services/backend.service';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // @Input() NavId: string = '';
  isReset: boolean = false;
  logo: string = '';
  arrNavItems: any[] = [];
  constructor(
    private authService: AuthService,
    private backendService: BackendService
  ) {}

  //
  signout(): void {
    this.authService.logout();
  }
  imgPath: string = '';
  ngOnInit(): void {
    this.imgPath = this.backendService.imgPath + 'logo.jpg';
  }
}
