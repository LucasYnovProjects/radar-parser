import { IAwesomeRadarData } from "../types/IAwesomeRadarData";
import {IRadarData} from "../types/IRadarData";
import {Radar} from "../types/Radar";

export class AwesomeRadar implements Radar {
  constructor() {}

  parse(data: IAwesomeRadarData): IRadarData {
    return {
      localisation: data.metadata.localisation,
      incidents: data.incidents.map((incident) => ({
        speed: data.metadata.speedThreshold,
        date: new Date(incident[1]),
        license: `${incident[0]}`
      }))
    }
  }
}