import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SystemProvider } from '../../providers/system/system';
import { Store } from '@ngrx/store';
import { getSystemInfoSelector } from '../../model/system/system.reducers';
import { SystemInfo } from '../../model/system/system.model';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  systemInfo: Observable<SystemInfo>;

  constructor(private store: Store<any>, public navCtrl: NavController, public navParams: NavParams, private system: SystemProvider) {
    this.system.setPage("Welcome");

    this. systemInfo = this.store.select(getSystemInfoSelector);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }



}
