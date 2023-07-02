import { FitaObject } from './../model/fita';
import { Component } from '@angular/core';
import { Fita, objectsFitas } from '../model/fita';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos-detalhes',
  templateUrl: './produtos-detalhes.component.html',
  styleUrls: ['./produtos-detalhes.component.css']
})
export class ProdutosDetalhesComponent {
  fitas : FitaObject | undefined ;


  constructor(private route: ActivatedRoute) {}


  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('fitaId'));


    this.fitas = objectsFitas.find(
      (fitas) => fitas.id === productIdFromRoute
    );
  }
}
