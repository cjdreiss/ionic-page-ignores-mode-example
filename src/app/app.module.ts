import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { DefaultPageModule } from '../pages/default/default.module';
import { SecondaryPageModule } from '../pages/secondary/secondary.module';
import { ModebreakPageModule } from '../pages/modebreak/modebreak.module';
import { NotapagePage } from '../pages/notapage/notapage';

@NgModule({
  declarations: [
    MyApp,
    NotapagePage,
  ],
  imports: [
    BrowserModule,
    DefaultPageModule,
    SecondaryPageModule,
    ModebreakPageModule,
    IonicModule.forRoot(MyApp, {
      mode: 'md',
      ios: {
        scrollAssist: false,
        autoFocusAssist: false,
        inputBlurring: false
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotapagePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
