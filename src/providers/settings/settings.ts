import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Platform} from "ionic-angular";
import {DocumentDirection} from "ionic-angular/platform/platform";

/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SettingsProvider {

  constructor(
    private platform: Platform,
    public http: HttpClient,
    private translate: TranslateService
  ) {
    console.log('Hello SettingsProvider Provider');
  }
  setHebrew() {
    this.setLanguage('he', 'rtl');
  }


  setDefault() {
    // Language and direction
    this.setHebrew();
  }

  setLanguage(lang: string, direction: DocumentDirection) {
    this.platform.setDir(direction, true);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

  currentLang () {
    return this.translate.currentLang;
  }
}
