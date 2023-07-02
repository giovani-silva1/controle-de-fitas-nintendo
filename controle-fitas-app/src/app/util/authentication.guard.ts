import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { User } from './../model/user';
import { WebStorageUtil } from './web-storage';


@Injectable()
export class AuthenticationGuard  {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let url: string = state.url;
    let user: User = WebStorageUtil.get(Constants.USERNAME_KEY) as User;

    if (!user) {
      this.router.navigateByUrl('/nao-autorizado');
      return false;
    }

    if (!user.isAdmin) {
      this.router.navigateByUrl('/nao-autorizado');
      return false;
    }

    return true;
  }
}
