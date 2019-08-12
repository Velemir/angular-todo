import { Injectable } from '@angular/core';

declare var UIkit: any;

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  loader = false;

  constructor() {}

  loaderStart() {
    this.loader = true;
  }

  loaderStop() {
    this.loader = false;
  }

  successNotification(msg: string) {
    UIkit.notification({
      message: "<span uk-icon='icon: check'></span> " + msg,
      status: 'success',
      pos: 'top-right',
      timeout: 1500
    });
  }

  errorNotification(msg: string) {
    UIkit.notification({
      message: "<span uk-icon='icon: bolt'></span> " + msg,
      status: 'danger',
      pos: 'top-right',
      timeout: 1500,
    });
  }

}
