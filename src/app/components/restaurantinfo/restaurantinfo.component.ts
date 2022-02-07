import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurantinfo',
  templateUrl: './restaurantinfo.component.html',
  styleUrls: ['./restaurantinfo.component.css'],
})
export class RestaurantinfoComponent implements OnInit {
  constructor() {}
  @Input() restaurantId: number = 0;
  ngOnInit(): void {
    console.log('@restaurantinfo : ', this.restaurantId);
  }
}
