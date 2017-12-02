import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'login-home',
  templateUrl: 'login.html',
  styles: ['./login.scss']
})
export class Login {
  public pushPage: any
  constructor(public navCtrl: NavController) {

    this.pushPage = TabsPage;
  }

}
