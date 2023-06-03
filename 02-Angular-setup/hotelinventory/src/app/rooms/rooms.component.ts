import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList, SkipSelf } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, of } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from '../services/config.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, AfterViewInit {
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

  roomList$ = this.roomService.getRooms$.pipe(catchError(err => {
    this.error$.next(err.message);
    return of([])
  }));

  priceFilter = new FormControl(0);
  error$: Subject<string> = new Subject();

  getError$ = this.error$.asObservable();

  roomCount$ = this.roomService.getRooms$.pipe(
    map(rooms => {
      return rooms.length
    })
  )

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  // Multiple instance of header component is present in html then we can use viewchildrens decorator to modify
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;


  //Skip self used here
  // constructor(@SkipSelf() private roomService: RoomsService) { }

  // Creating our own stream of data using observable
  stream = new Observable(observer => {
    observer.next('first');
    observer.next('second');
    observer.complete();
    // observer.error();
  })

  totalBytes = 0;

  constructor(@SkipSelf() private roomService: RoomsService,
    private configService: ConfigService) { }


  ngOnInit(): void {
    // this.roomService.getRooms$.subscribe(data=> {
    //   this.roomList = data;
    // });

    // subscribing to stream data
    this.stream.subscribe(streamData => {
      console.log(streamData);
    })

    // get photos of HTTPRequest
    this.roomService.getPhotos().subscribe(event => {
      console.log(event);
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been sent');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request Success!');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes = event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }
    })
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
      // roomNumber: '4',
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
    // this.roomList = [...this.roomList, room];

    this.roomService.addRooms(room).subscribe(data => {
      this.roomList = data;
    })
  }

  editRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Delux Extra comfort Room',
      amenities: 'Car, RoomFreshner',
      price: 1000,
      photos: '/assets/images/living-room-1835923__480.jpg',
      checkinTime: new Date('19-Nov-2021'),
      checkoutTime: new Date('29-Nov-2021'),
    }
    this.roomService.updateRoom(room).subscribe(data => {
      this.roomList = data;
    })
  }

  deleteRoom() {
    this.roomService.deleteRoom('2').subscribe(data => {
      this.roomList = data;
    })
  }
}
