import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebStorageUtil } from '../util/web-storage';
import { Constants } from '../util/constants';
import { LoginService } from 'src/services/loginService';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit  {
  loggedIn = false;
  @ViewChild('mobile') sideNav?: ElementRef;
  title = 'controle-fitas-app';
  subscription!: Subscription;


  constructor(private loginService: LoginService) {
    this.subscription = loginService.asObservable().subscribe((data) => {
      this.loggedIn = data;
      console.log('observer - menu');
    });
  }

  ngOnInit(): void {
    this.loggedIn = WebStorageUtil.get(Constants.LOGGED_IN_KEY) as boolean;
    console.log('init - menu');
  }

  ngAfterViewInit():void{
    M.Sidenav.init(this.sideNav?.nativeElement)

  }

  onLogout() {
    this.loginService.logout();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
