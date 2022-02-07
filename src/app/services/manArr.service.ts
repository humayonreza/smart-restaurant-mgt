import { Injectable } from '@angular/core';
//

@Injectable({
  providedIn: 'root',
})
export class ManArrService {
  arrFoodMenu: any[] = [];
  //
  set_arrFoodMenu(data: any) {
    // this.arrFoodMenu = data;
    for (let i = 0; i < data.length; i++) {
      let menu = {
        ser: data[i].ser,
        resId: data[i].resId,
        itemId: data[i].itemId,
        itemName: data[i].itemName,
        mealId: data[i].mealId,
        origId: data[i].origId,
        offer: data[i].offer,
        price: data[i].price,
        isAllergic: data[i].isAllergic,
        isFeatured: data[i].isFeatured,
        isSelected: 0,
        orderNo: 0,
      };
      this.arrFoodMenu.push(menu);
    }
    console.log('Complete Food List : ', this.arrFoodMenu);
  }
}

// courseId: '2';
// : '1';
// : '0';
// : '1009';
// : 'Bd Korma';
// : '2';
// : '0';
// : '0';
// : '41';
// : '1004';
// : '9';
