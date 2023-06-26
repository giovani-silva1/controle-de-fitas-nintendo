import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Shared } from '../util/shared';
import { Fita } from '../model/fita';
import { WebStorageUtil } from '../util/web-storage';
import { Constants } from '../util/constants';
import { User } from '../model/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-nova-fita',
  templateUrl: './nova-fita.component.html',
  styleUrls: ['./nova-fita.component.css']
})
export class NovaFitaComponent implements OnInit{

quantidade: number = 0;
nomeFita: string = '';
isSubmitted!: boolean;
isShowMessage: boolean = false;
isSuccess!: boolean;
message!: string;
users?: User[];
fitasEncontradas :any = []

  constructor() {}

ngOnInit(): void {
  Shared.initializeUsers();
}

onSubmit(){
  const user = JSON.parse(localStorage.getItem(Constants.USERNAME_KEY)!)
  let fita = new Fita(this.nomeFita,this.quantidade,new Date());
  user.fitas.push(fita)
  localStorage.setItem(Constants.USERNAME_KEY,JSON.stringify(user));
}
}
