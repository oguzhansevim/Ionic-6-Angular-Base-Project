import {Component} from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {AlertService} from '../../services/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private storageService: StorageService, private alertService: AlertService) {
  }

  set() {
    this.storageService.set('test', true).then(() => {

    });
  }

  get() {
    this.storageService.get('test').then(res => {
      this.alertService.basicAlert(res, '', 'Tamam');
    });
  }

  remove() {
    this.storageService.remove('test').then(() => {
      this.alertService.basicAlert('Ok', 'Başarıyla silindi', 'Tamam');
    }).catch((err) => {
      this.alertService.basicAlert('NOk', JSON.stringify(err), 'Tamam');
    });
  }

  clear() {
    this.storageService.clear();
  }

}
