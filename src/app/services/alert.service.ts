import {Injectable} from '@angular/core';
import {AlertController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertCtrl: AlertController) {
  }

  async basicAlert(header, message, buttons) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons
    });

    alert.present();
  }

  async promptAlert(message, name, cancelBtn, actionBtn, actionBtnCss, placeholder = '', header = '') {
    return new Promise(async (resolve, reject) => {
      const prompt = await this.alertCtrl.create({
        header,
        message,
        inputs: [
          {
            name,
            placeholder,
          },
        ],
        buttons: [
          {
            text: cancelBtn,
            handler: () => {
              reject();
            }
          },
          {
            text: actionBtn,
            cssClass: actionBtnCss,
            handler: (data) => {
              resolve(data);
            }
          }
        ]
      });
      prompt.present();
    });
  }

  async confirmAlert(header, cancelBtn, actionBtn, actionBtnCss, subHeader = '', message = '') {
    return new Promise<void>(async (resolve, reject) => {
      const confirm = await this.alertCtrl.create({
        header,
        subHeader,
        message,
        buttons: [
          {
            text: cancelBtn,
            handler: () => {
              reject();
            }
          },
          {
            text: actionBtn,
            cssClass: actionBtnCss,
            handler: () => {
              resolve();
            }
          }
        ]
      });

      confirm.present();
    });
  }
}
