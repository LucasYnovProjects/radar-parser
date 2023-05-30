import {IRadarData} from "./IRadarData";

export interface Radar {
  parse(data: any): IRadarData
}