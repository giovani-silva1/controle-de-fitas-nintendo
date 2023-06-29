

export class Fita {
  id: number;
  date: Date;
  constructor(public nome:string,public quantidadeFita: number,public produtora:string, public genero:string) {
    this.id = Math.round(Math.random() * 1000);
    this.nome = nome;
    this.quantidadeFita = quantidadeFita;
    this.produtora = produtora;
    this.genero = genero;
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
