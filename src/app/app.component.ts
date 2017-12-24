import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { WelcomePage } from '../pages/welcome/welcome';
import { SystemProvider } from '../providers/system/system';
import {SystemInitialState} from "../model/system/system.model";

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = WelcomePage;

  constructor(platform: Platform, statusBar: StatusBar, private splashScreen: SplashScreen, private system: SystemProvider) {

    this.splashScreen.show();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.system.updateState(SystemInitialState);
      statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

