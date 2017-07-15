import { Action, ActionReducer } from '@ngrx/store';
import { SystemInfo, SystemInitialState, SystemStatus } from './system.model';
import { SystemActionTypes } from './system.actions';



export const SystemInfoReducer: ActionReducer<SystemInfo> = (state: SystemInfo, action: Action) => {

  switch (action.type) {
    case SystemActionTypes.INITIATE: {
      return Object.assign({}, state, {status: SystemStatus.Initialization});
    }

    case SystemActionTypes.SET_PAGE: {
      return Object.assign({}, state, {page: action.payload});
    }

    case SystemActionTypes.UPDATE: {
      return Object.assign({},  action.payload);
    }

    default:
      return SystemInitialState
  }

};
