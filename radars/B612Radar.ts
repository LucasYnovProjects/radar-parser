import {Radar} from "../models/Radar";
import {RadarIncident} from "../models/RadarIncident";
import {RadarLocalisation} from "../models/RadarLocalisation";
import {RadarParser} from "../types/RadarParser";

interface IB612 {
  name: string,
  localisation: string,
  reports: IB612Report[]
}

interface IB612Report {
  licensePlate: string,
  speed: string,
  date: string,
  evidenceUrl: string
}

export class B612Radar implements RadarParser {
  parse(data: IB612): Radar {
    const results: RadarIncident[] = [];
    const localisation = new RadarLocalisation(data.localisation);
    data.reports.forEach((element: IB612Report) => {
      const incident = new RadarIncident({
        speed: parseInt(element.speed.replace('km/h', '')),
        license: element.licensePlate,
        date: new Date(element.date),
        evidenceUrl: element.evidenceUrl
      });

      results.push(incident);
    });
    return new Radar(
      localisation,
      results
    );
  }

  isSupported(data: any): boolean {
    const keys: String[] = Object.keys(data);
    return keys.length === 3 && !!data.name && !!data.localisation && !!data.reports;
  }
}