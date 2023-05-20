import { Component, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'hinv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent implements OnInit {

  room: RoomList = {
    roomType: '',
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: '',
    price: 0,
    rating: 0
  }
  successMsg: string = '';
  constructor(private roomService: RoomsService) { }

  ngOnInit(): void {
  }

  AddRoom(roomsForm: NgForm){
    this.roomService.addRooms(this.room).subscribe(data=> {
      console.log('data', data);
      this.successMsg = 'Room Added successfully';
      // roomsForm.reset();
      //Pass default data
      roomsForm.resetForm({
        roomType: 'Delux Room',
        amenities: 'Vodka',
      })
    })
  }

}
