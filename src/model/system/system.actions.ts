
import { Action } from '@ngrx/store';
import { SystemInfo } from './system.model';

export const INITIATE = '[System] Init system';
export const UPDATE = '[System] SystemUpdate system status';
export const SET_PAGE = '[System] change page';


export interface  SystemAction extends Action {
  payload?: any;
}
export class SystemInitiate implements Action {
  readonly type =  INITIATE;
  payload?: any;
}

export class SystemUpdate implements Action {
  readonly type = UPDATE;
  constructor(public payload: SystemInfo) { }
}

export class SystemSetPage implements Action {
  readonly type = SET_PAGE;
  constructor(public payload: string) { }
}

export type SystemActions
  = SystemInitiate
  | SystemUpdate
  | SystemSetPage;


