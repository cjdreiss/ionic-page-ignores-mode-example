import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SecondaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'secondary',
  segment: 'default/secondary',
  defaultHistory: ['default',]
})
@Component({
  selector: 'page-secondary',
  templateUrl: 'secondary.html',
})
export class SecondaryPage {
  public params;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.params = this.navParams.get('params')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondaryPage');
  }

}
