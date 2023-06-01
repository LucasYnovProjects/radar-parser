import {IRadarIncident} from "../models/RadarIncident";

export interface RadarRepository {
  getAllIncidents(): IRadarIncident[],
  getIncidentsByDate(date: string): IRadarIncident[],
  getIncidentsByLicense(license: string): IRadarIncident[],
}