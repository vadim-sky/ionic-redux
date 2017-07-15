
export enum SystemStatus {
  Initial = 0,
  Initialization,
  CONNECTING,
  CONNECTED,
  DISCONNECTED,
  OFFLINE = -1
}


export interface SystemInfo {
  token: string;
  status: SystemStatus;
  updated: number;
  page: string;
}


export const SystemActionTypes = {
  INIT: "SYSTEM.IN",
  INITIATED: "SYSTEM.CONNECTING_ENGINE",

};


export const SystemInitialState: SystemInfo  = {
  token: '',
  status: SystemStatus.Initial,
  updated: Date.now(),
  page: "Welcome"
};
