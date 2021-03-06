import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { INITIATE, SET_PAGE, SystemInitiate, SystemSetPage, SystemUpdate } from './system.actions';
import { SystemStatus } from './system.model';



@Injectable()
export class SystemEffects {

  constructor( private actions$: Actions) {}

  //
  // @Effect()
  // init$: Observable<Action> = defer(() => {
  //
  //   return of(new SystemInitiate());
  //
  // });


  @Effect() initiate$ = this.actions$
    .ofType(INITIATE)
    // .map( (action: SystemInitiate)  => action.payload )
    .switchMap ( payload => Observable.timer (1000)
        .switchMap(() => {
          console.log('After Init');
          return Observable.of(new SystemSetPage('Welcome Page'));
        })
    );


  @Effect() updatePage = this.actions$.ofType(SET_PAGE)
    .map( (action: SystemSetPage) => action.payload)
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
