import { Component } from '@angular/core';
import { Fita, objectsFitas } from '../model/fita';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  fitas = [...objectsFitas];



  onNotify() {
    window.alert('Voce tem mais de 10 fitas dessa, não acha legal doar para outros também se divertir?');
  }
}
