import type { User } from './user'


export type Version = {
  id:string;
  name:string;
  description:string;
  updated_at:string;
  developer?:User;
}

export type Service = {
  id:string;
  name:string;
  description:string;
  type:string;
  published:boolean;
  configured:boolean;
  versions:Version[];
  metrics?:{
    latency:number;
    uptime:number;
    requests:number;
    errors:number;
  }
}

export type SERVICE_TYPES = 'HTTP' | 'REST'