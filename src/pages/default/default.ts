import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DefaultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    name: 'default',
    segment: 'default'
})
@Component({
  selector: 'page-default',
  templateUrl: 'default.html',
})

export class DefaultPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DefaultPage');
  }

  pushViaString(){
      this.navCtrl.push('secondary', {
          'params': 'string'
      })
  }
}
