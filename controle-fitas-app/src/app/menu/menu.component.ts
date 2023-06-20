import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @ViewChild('mobile') sideNav?: ElementRef;
  title = 'controle-fitas-app';

  ngAfterViewInit():void{
    M.Sidenav.init(this.sideNav?.nativeElement)

  }
}
