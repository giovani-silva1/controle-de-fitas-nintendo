import { Fita } from "./fita";

export class User {
  name?: string;
  username: string;
  password: string;
  cpf?: string;
  quantidadeFitas:number;
  birthday?: Date;
  isAdmin: boolean;
  fitas: Fita[];
  constructor(username: string, password: string, isAdmin: boolean = false) {
    this.username = username;
    this.password = password;
    this.quantidadeFitas = 0;
    this.fitas = [];
    this.isAdmin = isAdmin;
  }

  public static clone(user: User) {
    let u: User = new User(user.username, user.password, user.isAdmin);
    u.name = user.name;
    u.cpf = user.cpf;
    u.birthday = user.birthday;
    u.fitas = user.fitas;
    return u;
  }

  public static toWS(user: User) {
    let u: User = new User(user.username, user.password, user.isAdmin);
    u.name = user.name;
    u.cpf = user.cpf;
    u.birthday = user.birthday;
    u.fitas = []
    return u;
  }
}
