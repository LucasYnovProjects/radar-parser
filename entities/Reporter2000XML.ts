import {Radar} from "../types/Radar";
import {IRadarData, IRadarIncident} from "../types/IRadarData";
import convert from "xml-js";
import {IReporter2000Data} from "../types/IReporter2000Data";
export class Reporter2000XML implements Radar {
  constructor() { }

  isSupported(data: any): boolean {
    const json: IReporter2000Data = this.toJson(data);
    return !!json.localisation && !!json.localisation._attributes && !!json.localisation.date;
  }

  getIncidentsByDate = (xmlIncident: any) => {
    const incidents: IRadarIncident[] = [];
    let drivers = xmlIncident.driver;
    const date = xmlIncident._attributes.day;

    if (!Array.isArray(drivers)) {
      drivers = [drivers];
    }

    for (let i = 0; i < drivers.length; i++) {
      const driver = drivers[i]._attributes;
      const {speed, license, brand, type} = driver;
      const incident: IRadarIncident = {
        speed: Number(speed),
        license,
        date,
        vehicle: {
          brand,
          type,
        },
      };
      incidents.push(incident);
    }

    return incidents;
  };

  toJson(xml: string): IReporter2000Data {
    const result = convert.xml2json(xml, {compact: true});
    return JSON.parse(result);
  }

  parse(data: any): IRadarData {
    const json: IReporter2000Data = this.toJson(data);
    const radarData: IRadarData = {
      localisation: "",
      incidents: [],
    };

    radarData.localisation = json.localisation._attributes.loc;

    let date = json.localisation.date;

    radarData.incidents = [];

    if (!Array.isArray(date)) {
      date = [date];
    }

    for (let i = 0; i < date.length; i++) {
      const incidents = this.getIncidentsByDate(date[i]);
      radarData.incidents.push(...incidents);
    }

    return radarData;
  }
}
