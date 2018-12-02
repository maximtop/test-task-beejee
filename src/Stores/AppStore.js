import { observable, action, computed } from 'mobx';
import Api from '../api/Api';

class AppStore {
  @observable currentUser;
  @observable isLoggedIn = false;
  @observable isAdmin;

  @action
  logIn() {

  }
}

export default new AppStore();
