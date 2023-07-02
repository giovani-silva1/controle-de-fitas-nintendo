import { Component, OnInit } from '@angular/core';
import { Fita } from '../model/fita';
import { WebStorageUtil } from '../util/web-storage';
import { Constants } from '../util/constants';

@Component({
  selector: 'app-dados-fita',
  templateUrl: './dados-fita.component.html',
  styleUrls: ['./dados-fita.component.css']
})
export class DadosFitaComponent implements OnInit  {
  fitas: Fita[] = [];
  constructor() {}

  ngOnInit(): void {
    this.fitas = WebStorageUtil.get(Constants.FITAS_KEY) as Fita[];
  }
}
