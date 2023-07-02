
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Shared } from '../util/shared';
import { Fita} from '../model/fita';
import { WebStorageUtil } from '../util/web-storage';
import { Constants } from '../util/constants';
import { User } from '../model/user';

import { FitaService } from './fita.service';

@Component({
  selector: 'app-nova-fita',
  templateUrl: './nova-fita.component.html',
  styleUrls: ['./nova-fita.component.css'],
  providers: [FitaService],
})
export class NovaFitaComponent implements OnInit, AfterViewInit{
  fita!: Fita;
  success = false;
  message = '';
  submitted = false;
  time = 0;
  form: any;

  constructor(private fitaService: FitaService) {}


  ngOnInit(): void {
    Shared.initializeWebStorage();
    const user = WebStorageUtil.get(Constants.USERNAME_KEY) as User;
    this.fita = new Fita('',0,'','');
  }

  onSubmit() {
    this.fitaService
      .save(this.fita)
      .then(() => {
        this.success = true;
        this.message =
          'Fita cadastrada com sucesso!';
        this.submitted = true;
      }).catch((e) => {
        this.success = false;
        this.message = e;
      })
      .finally(() => {
        console.log('A operação foi finalizada!');
      });

    setInterval(() => {
      this.time++;
    }, 500);
  }


  onButtonClickAgain() {
    console.log('Muito obrigado!');
  }


  ngAfterViewInit(): void {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
  }
}
