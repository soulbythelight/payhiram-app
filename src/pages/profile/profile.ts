import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController,
  	public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController) {

  }
  public dismiss(
  	) {
    this.viewCtrl.dismiss();
  }


}
