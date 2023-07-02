import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Shared } from '../util/shared';
import { User } from './../model/user';
import { UserStorageService } from './user-storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserStorageService],
})
export class UserComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  user!: User;
  users?: User[];
  userRepassword: string = '';
  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private userService: UserStorageService) {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.user = new User('', '');
    this.users = this.userService.getUsers();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.userService.isExist(this.user.username)) {
      this.userService.save(this.user);
      this.message = 'Cadastro realizado com sucesso!';
    } else {
      this.userService.update(this.user);
      this.message = 'Atualização de dados do usuário realizado com sucesso.';
    }
    this.isShowMessage = true;
    this.isSuccess = true;
    this.form.reset();
    this.user = new User('', '');
    this.users = this.userService.getUsers();
    this.userService.notifyTotalUsers();
  }

  onEdit(user: User) {
    let clone = User.clone(user);
    this.user = clone;
  }

  onDelete(username: string) {
    let confirmation = window.confirm(
      'Confirma a remoção do usuário: ' + username
    );
    if (!confirmation) {
      return;
    }
    let response: boolean = this.userService.delete(username);
    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      this.message = 'O item foi removido com sucesso!';
    } else {
      this.message = 'Opps! O item não pode ser removido!';
    }
    this.users = this.userService.getUsers();
    this.userService.notifyTotalUsers();
  }
}
