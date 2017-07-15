import { Action, combineReducers } from '@ngrx/store';
import { SystemInfoReducer } from './system/system.reducers';



const ALL_REDUCERS = {
  SystemInfoReducer
};


export const  appReducers = (state: any, action: Action)  => combineReducers(ALL_REDUCERS)(state, action);
