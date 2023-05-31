import {IRadarData} from "./IRadarData";

export interface Radar {
  parse(data: any): IRadarData,
  isSupported(data: any): boolean,
}