import { type } from '../../utils/index';
import { Action } from '@ngrx/store';
import { SystemInfo } from './system.model';

export const  SystemActionTypes = {
  INITIATE:    type('[System] Init system'),
  UPDATE: type('[System] SystemUpdate system status'),
  SET_PAGE: type('[System] change page'),
};


export class SystemInitiate implements Action {
  type = SystemActionTypes.INITIATE;
}

export class SystemUpdate implements Action {
  type = SystemActionTypes.UPDATE;
  constructor(public payload: SystemInfo) { }
}

export class SystemSetPage implements Action {
  type = SystemActionTypes.SET_PAGE;
  constructor(public payload: string) { }
}

export type SystemActions
  = SystemInitiate
  | SystemUpdate
  | SystemSetPage;


