import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SettingsProvider} from "../../providers/settings/settings";
import {DocumentDirection} from "ionic-angular/platform/platform";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  language: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private settings: SettingsProvider) {
  }

  ionViewDidLoad() {
    this.language = this.settings.currentLang();
    console.log('Hello SettingsPage Page');
  }

  changeLanguage() {
    let dir: DocumentDirection = 'ltr';
    if (this.language ==='he') {
      dir = 'rtl';
    }

    this.settings.setLanguage(this.language, dir);
  }

}
