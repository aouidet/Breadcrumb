import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'room',
    loadChildren: () => import ('./rooms-heros/room/room.module').then(module => module.RoomModule),
    data: {title:'Room'}
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking/booking-routing.module').then(module => module.BookingRoutingModule),
    data: {title: 'booking'}
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    // TODO :add notFound page 
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
