import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomRoutingModule } from './room-routing.module';
import { HeroListComponent } from './hero-list/hero-list/hero-list.component';



@NgModule({
  declarations: [HeroListComponent],
  imports: [
    CommonModule,
    RoomRoutingModule
  ]
})
export class RoomModule { }
