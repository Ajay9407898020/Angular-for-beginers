import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  hotelName: string = 'Taj Hotel';
  noOfRooms: number = 10;
  hideRooms = false;
  rooms: Room = {
    avalableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  }
  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Delux Room',
      amenities: 'Mortine, AC, TV',
      price: 100,
      photos: '/assets/images/living-room-1835923__480.jpg',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
    },
    {
      roomNumber: 2,
      roomType: 'Plain Room',
      amenities: 'AC, TV, machine',
      price: 200,
      photos: '/assets/images/living-room-1835923__480.jpg',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
    },
    {
      roomNumber: 3,
      roomType: 'Stylish Room',
      amenities: 'Windows, Bike, machine',
      price: 300,
      photos: '/assets/images/living-room-1835923__480.jpg',
      checkinTime: new Date('15-Nov-2021'),
      checkoutTime: new Date('19-Nov-2021'),
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  toogle() {
    this.hideRooms = !this.hideRooms;
  }

}
