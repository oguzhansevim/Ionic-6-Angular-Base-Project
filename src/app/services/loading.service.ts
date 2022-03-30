import {Injectable} from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loading;

  constructor(private loadingCtrl: LoadingController) {
  }

  async presentLoading(message = '') {
    this.loading = await this.loadingCtrl.create({
      message,
    });

    await this.loading.present();
  }

  async dismissLoading() {
    await this.loading.dismiss();
  }
}
