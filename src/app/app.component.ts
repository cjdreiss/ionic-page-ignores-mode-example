import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DefaultPage } from '../pages/default/default';
import { SecondaryPageModule } from '../pages/secondary/secondary.module';
import { SecondaryPage } from '../pages/secondary/secondary';
import { ModebreakPage } from '../pages/modebreak/modebreak';
import { NotapagePage } from '../pages/notapage/notapage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'default';
  pages:any;
  @ViewChild(Nav) _nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.pages = [
      {title: 'Default w/String', component: 'default', icon: 'md-bulb'},
      {title: 'Default w/Component', component: DefaultPage, icon: 'md-bulb'},
      {title: 'Secondary w/String', component: 'secondary', icon: 'md-bulb'},
      // {title: 'Secondary w/Component', component: SecondaryPage, icon: 'md-bulb'},
      {title: 'Mode Break??', component: ModebreakPage, icon:'md-bulb'},
      {title: 'Not a Page', component: NotapagePage, icon:'md-bulb'}

    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this._nav.setRoot(page.component);
  }


}

