import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FitaObject } from '../model/fita';

@Component({
  selector: 'app-produtos-alerta',
  templateUrl: './produtos-alerta.component.html',
  styleUrls: ['./produtos-alerta.component.css']
})
export class ProdutosAlertaComponent {
  @Input() fita: FitaObject | undefined;
  @Output() notify = new EventEmitter();
}
