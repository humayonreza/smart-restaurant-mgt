import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from './../../services/backend.service';
import { ManArrService } from './../../services/manArr.service';
export interface arrFoodChoice {
  ser: number;
  icon: string;
  optVal: number;
  optTxt: string;
  isSelected: number;
}
@Component({
  selector: 'app-restaurantmenu',
  templateUrl: './restaurantmenu.component.html',
  styleUrls: ['./restaurantmenu.component.css'],
})
export class RestaurantmenuComponent implements OnInit {
  constructor(
    private backendService: BackendService,
    private manArrService: ManArrService
  ) {}
  @Input() restaurantId: number = 0;
  arrFoodMenu: any[] = [];
  arrMenuSelected: any[] = [];
  arrFoodChoice: arrFoodChoice[] = [
    // {
    //   ser: 1,
    //   icon: 'star',
    //   optVal: 1,
    //   optTxt: 'Spacials',
    //   isSelected: 0,
    // },
    {
      ser: 1,
      icon: 'local_cafe',
      optVal: 1,
      optTxt: 'Breakfast',
      isSelected: 0,
    },
    {
      ser: 2,
      icon: 'local_dining',
      optVal: 2,
      optTxt: 'Lunch',
      isSelected: 0,
    },
    {
      ser: 3,
      icon: 'tonality',
      optVal: 3,
      optTxt: 'Dinner',
      isSelected: 0,
    },
    // {
    //   ser: 4,
    //   icon: 'local_library',
    //   optVal: 4,
    //   optTxt: 'La Carte',
    //   isSelected: 0,
    // },
    {
      ser: 4,
      icon: 'local_bar',
      optVal: 4,
      optTxt: 'Drinks',
      isSelected: 0,
    },
  ];

  select_choice(optVal: number) {
    console.log('Opt Val', optVal);
    for (let i = 0; i < this.arrFoodChoice.length; i++) {
      this.arrFoodChoice[i].isSelected =
        this.arrFoodChoice[i].optVal == optVal ? 1 : 0;
    }
    // let arrFood = this.manArrService.arrFoodMenu.filter(
    //   (m) => m.resId == this.restaurantId
    // );
    this.arrMenuSelected = [];
    this.arrMenuSelected = this.arrFoodMenu.filter((m) => m.mealId == optVal);
    // if (optVal == 1) {
    //   this.arrMenuSelected = this.arrFoodMenu.filter((m) => m.isFeatured == 1);
    // } else if (optVal == 2 || optVal == 3 || optVal == 4 || optVal == 5) {
    //   this.arrMenuSelected = this.arrFoodMenu.filter((m) => m.mealId == optVal);
    // }
  }
  //

  editOrder(itemId: number, incrementType: number) {
    let index = this.arrFoodMenu.findIndex((p) => p.itemId == itemId);
    if (incrementType == 1 && this.arrFoodMenu[index].orderNo >= 0) {
      this.arrFoodMenu[index].orderNo = this.arrFoodMenu[index].orderNo + 1;
      this.arrFoodMenu[index].isSelected =
        this.arrFoodMenu[index].orderNo == 0 ? false : true;
    } else if (incrementType == 2 && this.arrFoodMenu[index].isSelected) {
      this.arrFoodMenu[index].orderNo = this.arrFoodMenu[index].orderNo - 1;
      this.arrFoodMenu[index].isSelected =
        this.arrFoodMenu[index].orderNo == 0 ? false : true;
    }
  }
  //
  fetch_foodmenu(resId: number) {
    let data = {
      resId,
      queryId: '2',
    };
    this.backendService.SubmitQuery(data).subscribe((resp: any) => {
      // this.arrFoodMenu = resp;
      if (resp) {
        for (let i = 0; i < resp.length; i++) {
          let menu = {
            ser: resp[i].ser,
            resId: resp[i].resId,
            itemId: resp[i].itemId,
            itemName: resp[i].itemName,
            mealId: resp[i].mealId,
            origId: resp[i].origId,
            offer: resp[i].offer,
            price: resp[i].price,
            isAllergic: resp[i].isAllergic,
            isFeatured: resp[i].isFeatured,
            isSelected: false,
            orderNo: 0,
          };
          this.arrFoodMenu.push(menu);
        }
        // this.manArrService.set_arrFoodMenu(resp);
        console.log('Restaurant Menu : ', this.arrFoodMenu);
      }
    });
  }

  ngOnInit(): void {
    this.fetch_foodmenu(this.restaurantId);
  }
}
