import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailsBookingComponent } from "./details-booking/details-booking.component";

const routes: Routes = [
    {
        path: '', component: DetailsBookingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookingRoutingModule{}