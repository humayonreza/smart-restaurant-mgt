import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from './../../services/backend.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  constructor(private backendService: BackendService) {}
  @Input() restaurantId: number = 0;
  arrOpTimeSlot: any[] = [];
  arrTimeSlotByMealId: any[] = [];
  mealId: number = 0;
  reservationDate: string = '';
  isSlotAval: boolean = false;
  fetch_optimeslot(resId: number) {
    let data = {
      resId,
      queryId: '1',
    };
    this.backendService.SubmitQuery(data).subscribe((resp: any) => {
      console.log('Response : ', resp);
      this.arrOpTimeSlot = resp;
    });
  }
  //
  fetch_optimeslot_by_date_mealId(data: any) {
    this.arrTimeSlotByMealId = this.arrOpTimeSlot.filter(
      (m) => m.mealId == data.mealId
    );
    this.isSlotAval = true;
    console.log('arrTimeSlotByMealId : ', this.arrTimeSlotByMealId);
  }
  //
  init(): void {
    this.fetch_optimeslot(this.restaurantId);
    console.log('@reservation : ', this.restaurantId);
  }
  ngOnInit(): void {
    this.init();
  }
}
