import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { SystemInfo } from '../../model/system/system.model';
import { Store } from '@ngrx/store';
import {SystemInitiate, SystemSetLanguage, SystemSetPage, SystemUpdate} from '../../model/system/system.actions';
import {HttpClient} from "@angular/common/http";

/*
  Generated class for the SystemProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SystemProvider {

  constructor(public http: HttpClient, private store: Store<SystemInfo>) {
    this.store.dispatch(new SystemInitiate());
    console.log('Hello SystemProvider Provider');
  }

  updateState (state: SystemInfo): void {
    this.store.dispatch(new SystemUpdate(state));

  }

  setPage (page: string): void {
    console.log('set page: ', page);
    this.store.dispatch(new SystemSetPage(page));
  }

  setLanguage (lang: string, dir: string): void {
    console.log('set language: ', lang, dir);
    this.store.dispatch(new SystemSetLanguage(lang));
  }

}
