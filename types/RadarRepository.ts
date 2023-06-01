import {IRadarIncident} from "../models/RadarIncident";

export interface RadarRepository {
  findByDate(date: string): IRadarIncident[]
}