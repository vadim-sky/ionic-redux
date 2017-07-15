import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SystemInfo } from '../../model/system/system.model';
import { Store } from '@ngrx/store';
import { SystemActions, SystemInitiate, SystemSetPage, SystemUpdate } from '../../model/system/system.actions';

/*
  Generated class for the SystemProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SystemProvider {

  constructor(public http: Http, private store: Store<SystemInfo>) {
    this.store.dispatch(new SystemInitiate());
    console.log('Hello SystemProvider Provider');
  }

  updateState (state: SystemInfo): void {
    this.store.dispatch(new SystemUpdate(state));

  }

  setPage (page: string): void {
    this.store.dispatch(new SystemSetPage(page));
  }

}
