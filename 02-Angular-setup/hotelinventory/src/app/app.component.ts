import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef, Optional } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'hotelinventory';
  @ViewChild('user', { read: ViewContainerRef}) vcr!: ViewContainerRef;
  @ViewChild('name', { static: true }) name!: ElementRef;


  constructor(@Optional() private loggerService: LoggerService,
  private initService: InitService,
  private configService: ConfigService,
  private router: Router) {
    this.loggerService?.log('appComponent.ngOninit() ');
    console.log('config init', initService.config);
  }

  ngOnInit(): void {
    // this.name.nativeElement.innerHTML = `<h3>Hilton Hotels</h3>`;
    console.log('NgOnint')
    this.router.events.pipe(
      filter((event)=> event instanceof NavigationStart)
    ).subscribe(()=> {
      console.log('Navigation started')
    })

    this.router.events.pipe(
      filter((event)=> event instanceof NavigationEnd)
    ).subscribe(()=> {
      console.log('Navigation End')
    })
  }

  ngAfterViewInit(): void {
    // Dynamically loading Room component
    const componentRef = this.vcr.createComponent(RoomsComponent);
    // also we are able to access property of RoomComponent
    componentRef.instance.noOfRooms = 1293;
  }
}
