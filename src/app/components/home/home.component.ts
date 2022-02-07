import { Component, OnInit } from '@angular/core';
import { BackendService } from './../../services/backend.service';
//
export interface arrFetchedRestaurantData {
  ser: number;
  logo: string;
  resId: number;
  restaurantName: string;
  rating: string;
  address: string;
  closingTime: string;
  loc: string;
}
//
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private backendSercvice: BackendService) {}
  isSmart: boolean = false;
  imgPath: string = '';
  arrRestaurantData: any[] = [];
  arrFetchedRestaurantData: arrFetchedRestaurantData[] = [
    {
      ser: 1,
      logo: '1001.png',
      resId: 1001,
      restaurantName: 'Star Kabab',
      rating: '4.0',
      address: '26 Nazrul Ave',
      closingTime: '11:00 PM',
      loc: '23.8623443, 90.1328884',
    },
    {
      ser: 2.0,
      logo: '1002.png',
      resId: 1002,
      restaurantName: 'The Moghol',
      rating: '3.5',
      address: '2 Mirpur Cct',
      closingTime: '10:30 PM',
      loc: '23.87623, 90.2399432',
    },
    {
      ser: 3,
      logo: '1003.png',
      resId: 1003,
      restaurantName: 'Dhakai Birani House',
      rating: '2.0',
      address: '19 Sobujbagh Ave',
      closingTime: '11:59 PM',
      loc: '23.8623443, 90.1328004',
    },
    {
      ser: 4,
      logo: '1004.png',
      resId: 1004,
      restaurantName: 'Dark Choice',
      rating: '4.5',
      address: '29 Indira Road',
      closingTime: '10:59 PM',
      loc: '23.8623443, 90.1328004',
    },
  ];
  configSlider = {
    slidesToShow: 1, //screen.width < 500 ? 1 : 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    fade: true,
    cssEase: 'linear',
  };
  //
  onSelectRestaurant(resId: number) {
    console.log(resId);
    for (let i = 0; i < this.arrRestaurantData.length; i++) {
      this.arrRestaurantData[i].isSelected =
        this.arrRestaurantData[i].resId == resId ? 1 : 2;
    }
  }
  //
  init(imgPath: string) {
    this.arrRestaurantData = [];
    for (let i = 0; i < this.arrFetchedRestaurantData.length; i++) {
      let data = {
        ser: this.arrFetchedRestaurantData[i].ser,
        logo: imgPath + 'logo/' + this.arrFetchedRestaurantData[i].logo,
        resId: this.arrFetchedRestaurantData[i].resId,
        restaurantName: this.arrFetchedRestaurantData[i].restaurantName,
        rating: this.arrFetchedRestaurantData[i].rating,
        address: this.arrFetchedRestaurantData[i].address,
        closingTime: this.arrFetchedRestaurantData[i].closingTime,
        loc: this.arrFetchedRestaurantData[i].ser,
        isSelected: 0,
      };
      this.arrRestaurantData.push(data);
    }
  }
  //
  ngOnInit(): void {
    this.imgPath = this.backendSercvice.imgPath;
    this.isSmart = screen.width > 580 ? false : true;
    this.init(this.imgPath);
  }
}
