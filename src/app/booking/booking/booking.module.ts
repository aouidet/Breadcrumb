import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingRoutingModule } from './booking-routing.module';
import { DetailsBookingComponent } from './details-booking/details-booking.component';



@NgModule({
  declarations: [DetailsBookingComponent],
  imports: [
    CommonModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
