
import { SystemInfoReducer } from './system/system.reducers';
import { ActionReducerMap } from '@ngrx/store';
import { SystemInfo } from './system/system.model';

/*
const ALL_REDUCERS = {
  SystemInfoReducer
};


export const  appReducers = (state: any, action: Action)  => combineReducers(ALL_REDUCERS)(state, action);*/


export interface State {
  systemInfo: SystemInfo
}

export const appReducers: ActionReducerMap<State> = {
  systemInfo: SystemInfoReducer
};
