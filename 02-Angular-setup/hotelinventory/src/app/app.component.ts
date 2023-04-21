import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'hotelinventory';
  @ViewChild('user', { read: ViewContainerRef}) vcr!: ViewContainerRef;
  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit(): void {
    this.name.nativeElement.innerHTML = `<h3>Hilton Hotels</h3>`;
  }

  ngAfterViewInit(): void {
    // Dynamically loading Room component
    const componentRef = this.vcr.createComponent(RoomsComponent);
    // also we are able to access property of RoomComponent
    componentRef.instance.noOfRooms = 1293;
  }
}
