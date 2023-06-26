export class Fita {
  public id: number;
  constructor(public nomeDigitado: string,public quantFitas: number,public date: Date) {
    this.id = Math.round(Math.random() * 1000);
    this.nomeDigitado = nomeDigitado;
    this.quantFitas = quantFitas;
    this.date = new Date();
  }

}


export interface FitaObject {
  id: number;
  nome: string;
  quantidade: number;
  genero:string;
  produtora:string;
  dataCadastro:string;
}
export const objectsFitas = [
  {
    id: 1,
    nome: 'Donkey Kong',
    quantidade: 11,
    genero: 'AVENTURA',
    produtora:'NINTENDO',
    dataCadastro:'26/06/2023'
  },
  {
    id: 2,
    nome: 'Super Mario',
    quantidade: 5,
    genero: 'AVENTURA',
    produtora:'NINTENDO',
    dataCadastro:'26/06/2023'
  },
  {
    id: 3,
    nome: 'Street Fighter',
    quantidade: 2,
    genero: 'LUTA',
    produtora:'NINTENDO',
    dataCadastro:'26/06/2023'
  }
];
