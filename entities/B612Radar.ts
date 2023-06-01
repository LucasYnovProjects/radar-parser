import {IB612, IB612Report} from "../types/IB612Data";
import {IRadarData, IRadarIncident} from "../types/IRadarData";
import {Radar} from "../types/Radar";

export class B612Radar implements Radar {
  constructor() {
  }

  parse(data: IB612): IRadarData {
    const results: IRadarIncident[] = [];
    data.reports.forEach((element: IB612Report) => {
      results.push(
        {
          speed: parseInt(element.speed.replace('km/h', '')),
          license: element.licensePlate,
          date: new Date(element.date),
          evidenceUrl: element.evidenceUrl
        }
      )
    });
    return (
      {
        localisation: data.localisation,
        incidents: results
      }
    )
  }

  isSupported(data: any): boolean {
    const keys: String[] = Object.keys(data);
    return keys.length === 3 && !!data.name && !!data.localisation && !!data.reports;
  }
}