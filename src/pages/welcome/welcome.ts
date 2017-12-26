import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SystemProvider } from '../../providers/system/system';
import { Store } from '@ngrx/store';
import { getSystemInfoSelector } from '../../model/system/system.reducers';
import {SystemInfo, SystemStatus} from '../../model/system/system.model';
import { Observable } from 'rxjs/Observable';
import {TabsPage} from "../tabs/tabs";
import {Subscription} from "rxjs/Subscription";

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
  subscription: Subscription;

  constructor(private store: Store<any>, public navCtrl: NavController, public navParams: NavParams, private system: SystemProvider) {}

  ionViewDidLoad() {
    this.system.setPage("Welcome");
    this.systemInfo = this.store.select(getSystemInfoSelector);
    this.subscription = this.systemInfo
      .subscribe((info: SystemInfo) => {
        console.log(JSON.stringify(info));
        if (info.status === SystemStatus.CONNECTED) {
          this.navCtrl.push(TabsPage).then(()=> {
            this.system.setPage('TabsPage');
          });
        }
      });
  }


  ionViewWillLeave() {
    console.log('----UNSUBSCRIBE----');
    this.subscription.unsubscribe();
  }


}
