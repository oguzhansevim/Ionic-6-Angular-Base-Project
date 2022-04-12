import {Injectable} from '@angular/core';
import {NativeStorage} from '@awesome-cordova-plugins/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private nativeStorage: NativeStorage) {}

  get(ref) {
    return new Promise((resolve, reject) => {
      this.nativeStorage.getItem(ref).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }

  set(ref, val) {
    return new Promise((resolve, reject) => {
      this.nativeStorage.setItem(ref, val).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }

  remove(ref) {
    return new Promise((resolve, reject) => {
      this.nativeStorage.remove(ref).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }

  clear() {
    return new Promise((resolve, reject) => {
      this.nativeStorage.clear().then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
