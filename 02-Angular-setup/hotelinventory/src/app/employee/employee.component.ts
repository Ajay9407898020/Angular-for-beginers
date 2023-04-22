import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  // It is use for self decorator
  // constructor(@Self() private roomService: RoomsService) { }

  constructor(private roomService: RoomsService) { }


  ngOnInit(): void {
  }

}
