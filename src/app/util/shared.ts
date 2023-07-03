import { User } from '../model/user';
import { Constants } from './constants';

export class Shared {
  constructor() {}

  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.USERNAME_KEY) != null) {
      return;
    }

    let user = new User(Constants.USERNAME_KEY, 'qwerty', true);

    localStorage.setItem(Constants.USERNAME_KEY, JSON.stringify(user));
    localStorage.setItem(Constants.USERS_KEY, JSON.stringify([]));
    localStorage.setItem(Constants.LOGGED_IN_KEY, String(false));

    localStorage.removeItem(Constants.FITAS_KEY);
    localStorage.setItem(Constants.FITAS_KEY, JSON.stringify([]));
  }
}
