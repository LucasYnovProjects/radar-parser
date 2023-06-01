import {Radar} from "../models/Radar";
import {RadarIncident} from "../models/RadarIncident";
import {RadarLocalisation} from "../models/RadarLocalisation";
import {RadarParser} from "../types/RadarParser";

type IAwesomeRadarIncident = string[][];

interface IAwesomeRadarMetadata {
  localisation: string,
  speedThreshold: number,
}

interface IAwesomeRadarData {
  metadata: IAwesomeRadarMetadata,
  incidents: IAwesomeRadarIncident
}

export class AwesomeRadar implements RadarParser {
  parse(data: IAwesomeRadarData): Radar {
    const localisation = new RadarLocalisation(data.metadata.localisation);
    const incidents = data.incidents.map((incident) => new RadarIncident({
      speed: data.metadata.speedThreshold,
      date: new Date(incident[1]),
      license: `${incident[0]}`
    }));
    return new Radar(localisation, incidents);
  }

  isSupported(data: any): boolean {
    const keys: String[] = Object.keys(data);
    return keys.length === 2 && !!data.incidents && !!data.metadata;
  }
}