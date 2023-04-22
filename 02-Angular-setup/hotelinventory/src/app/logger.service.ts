import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
  log(msg: string) {
    console.log('msg to be printed : ', msg);
  }
}
