import { Inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { RoomList } from '../rooms';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomsList!: RoomList[];
  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
  private http: HttpClient) {
    console.log('Room service instantiate once only');

    console.log('api endpoints', config.apiEndpoint);
   }

  getRooms(){
    return this.http.get<RoomList[]>('/api/rooms');
  }
}
