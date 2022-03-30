import {Injectable} from '@angular/core';
import {NavController} from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private navCtrl: NavController) {}

  async push(page) {
    await this.navCtrl.navigateForward(page);
  }

  async setRoot(page) {
    await this.navCtrl.navigateRoot(page);
  }

  async pop() {
    await this.navCtrl.pop();
  }
}
