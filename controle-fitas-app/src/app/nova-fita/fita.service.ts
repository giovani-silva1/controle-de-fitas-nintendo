import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { Fita} from '../model/fita';
import { WebStorageUtil } from '../util/web-storage';


@Injectable()
export class FitaService {
  constructor() {}
  save(fita: Fita): Promise<Fita> {
    const p = new Promise<Fita>((resolve, reject) => {
      if (fita.quantidadeFita < 0) {
        reject('Caro colecionador, nos ajude, o valor precisa ser positivo!');
      }
      setTimeout(() => {
        const fitas = WebStorageUtil.get(Constants.FITAS_KEY);
        fitas.push(fita);
        WebStorageUtil.set(Constants.FITAS_KEY, fitas);
        resolve(fita);
      }, 5000);
    });
    return p;
  }

  calculateTotalFitas(): number {
    const fitas = JSON.parse(localStorage.getItem(Constants.FITAS_KEY)!);
    return fitas.reduce((quantidade: number, fita: Fita) => {
      return quantidade + fitas.quantidade;
    }, 0);
  }
}
