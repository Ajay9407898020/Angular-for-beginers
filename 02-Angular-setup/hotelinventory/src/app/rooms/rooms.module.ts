import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsComponent } from './rooms.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { EmployeeComponent } from '../employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { HeaderModule } from '../header/header.module';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    EmployeeComponent,
    RoomsBookingComponent,
    RoomsAddComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    HeaderModule,
    ReactiveFormsModule
  ]
})
export class RoomsModule { }
