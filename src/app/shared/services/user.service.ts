import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _userId: number;

  constructor() {
    this.userId = 3;
  }

  get userId() {
    return this._userId
  }

  set userId(id: number) {
    this._userId = id;
  }
}
