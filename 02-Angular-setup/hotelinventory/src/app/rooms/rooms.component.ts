import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, SkipSelf } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, AfterViewInit{
  hotelName: string = 'Taj Hotel';
  noOfRooms: number = 10;
  hideRooms = false;
  rooms: Room = {
    avalableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  }
  selectedRoom!: RoomList;
  roomList!: RoomList[];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  // Multiple instance of header component is present in html then we can use viewchildrens decorator to modify
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;


  //Skip self used here
  // constructor(@SkipSelf() private roomService: RoomsService) { }
  
  constructor(@SkipSelf() private roomService: RoomsService) { }


  ngOnInit(): void {
    console.log(this.headerComponent);
    this.roomService.getRooms().subscribe(data=> {
      this.roomList = data;
    });
  }

  ngAfterViewInit() {
    console.log(this.headerComponent);
    this.headerComponent.title = 'Room View';

    console.log('this.headerChildrenComponent', this.headerChildrenComponent);
    this.headerChildrenComponent.last.title = "Header compoent title change using viewChildren decorator"
  }

  toogle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(event: RoomList) {
    // console.log(event);
    this.selectedRoom = event;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: '4',
      roomType: 'Fab Room',
      amenities: 'Car, RoomFreshner',
      price: 1000,
      photos: '/assets/images/living-room-1835923__480.jpg',
      checkinTime: new Date('19-Nov-2021'),
      checkoutTime: new Date('29-Nov-2021'),
    }

    // Changed detecttion will not detect if onpush strategy applied on child component
    // this.roomList.push(room);

    // Change detection will detect the new instance of array
    this.roomList = [...this.roomList, room];
  }

}
