import {Component} from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {AlertService} from '../../services/alert.service';
import {ToastService} from '../../services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private storageService: StorageService, private alertService: AlertService, private toastService: ToastService) {
  }

  set() {
    this.storageService.set('test', true).then(() => {

    });
  }

  get() {
    this.storageService.get('test').then(res => {
      this.alertService.basicAlert(res, '', 'Ok');
    });
  }

  remove() {
    this.storageService.remove('test').then(() => {
      this.alertService.basicAlert('Ok', 'Successfully removed', 'Ok');
    }).catch((err) => {
      this.alertService.basicAlert('NOk', JSON.stringify(err), 'Ok');
    });
  }

  clear() {
    this.storageService.clear();
  }

  toast() {
    this.toastService.presentToast('Test toast message');
  }

}
