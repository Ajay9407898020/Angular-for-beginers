import { Inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { RoomList } from '../rooms';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  // header = new HttpHeaders({
  //   'token': '1234dfjdlkfjdlfkjdlk39239jlkcl'
  // })
  getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(
    shareReplay(1)
  )

  roomsList!: RoomList[];
  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
  private http: HttpClient) {
    console.log('Room service instantiate once only');

    console.log('api endpoints', config.apiEndpoint);
   }

  getRooms(){
    return this.http.get<RoomList[]>('/api/rooms');
  }

  addRooms(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  updateRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(id: string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  getPhotos() {
    const request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos', {
      reportProgress: true
    })
    return this.http.request(request);
  }
}
