import { Pipe, PipeTransform } from '@angular/core';
import { RoomList } from './rooms';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(roomList: RoomList[], price: number): RoomList[] {
    return roomList.filter(room => room.price > price);
  }

}
