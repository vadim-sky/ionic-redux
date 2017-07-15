import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { SystemActionTypes, SystemSetPage, SystemUpdate } from './system.actions';
import { SystemInfo, SystemStatus } from './system.model';



@Injectable()
export class SystemEffects {

  constructor( private actions$: Actions) {}

  @Effect() initiate$ = this.actions$
    .ofType(SystemActionTypes.INITIATE)
    .map( action  => action.payload )
    .switchMap ( payload => Observable.timer (1000)
        .switchMap(() => {
          console.log('After Init');
          return Observable.of(new SystemSetPage('Welcome Page'));
        })
    );

  @Effect() updatePage = this.actions$
    .ofType(SystemActionTypes.SET_PAGE)
    .map( action  => action.payload )
    .switchMap ( payload => Observable.timer (1000)
      .switchMap(() => {
        console.log('Current Page: ', payload);
        return Observable.of(new SystemUpdate({
          token: '11111',
          status: SystemStatus.Initial,
          updated: Date.now(),
          page: payload
        }));
      })
    );

}
