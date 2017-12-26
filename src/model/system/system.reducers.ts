import { ActionReducer, createSelector } from '@ngrx/store';
import { SystemInfo, SystemInitialState, SystemStatus } from './system.model';
import {INITIATE, SET_LANGUAGE, SET_PAGE, UPDATE} from './system.actions';
import * as system from './system.actions';
import { State } from '../reducers';


export const SystemInfoReducer: ActionReducer<SystemInfo> =
  (state: SystemInfo, action: system.SystemInitiate | system.SystemSetPage | system.SystemUpdate | system.SystemSetLanguage) => {

  switch (action.type) {
    case INITIATE: {
      return Object.assign({}, state, {status: SystemStatus.Initialization});
    }

    case SET_PAGE: {
      return Object.assign({}, state, {page: action.payload});
    }

    case UPDATE: {
      return Object.assign({},  action.payload);
    }

    case SET_LANGUAGE: {
      return Object.assign({}, state, {language: action.payload || 'en'});
    }

    default:
      return SystemInitialState
  }

};

export const getSystemInfo = (state: State) => state.systemInfo;

export const getSystemInfoSelector = createSelector(getSystemInfo, (info) =>  info);
