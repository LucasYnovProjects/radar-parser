import {RadarParser} from "../types/RadarParser";
import {Radar} from "../models/Radar";
import {IRadarIncident, RadarIncident} from "../models/RadarIncident";
import convert from "xml-js";
import {RadarVehicle} from "../models/RadarVehicle";
import {RadarLocalisation} from "../models/RadarLocalisation";

interface IReporterDriver {
  _attributes: {
    license: string,
    type: string,
    brand: string,
    speed: string,
  },
}

interface IReporterDate {
  _attributes: {day: string},
  driver: IReporterDriver | IReporterDriver[],
}

interface IReporterLocalisation {
  _attributes: {loc: string},
  date: IReporterDate | IReporterDate[],
}

interface IReporter2000Data {
  localisation: IReporterLocalisation,
}

export class Reporter2000XML implements RadarParser {
  isSupported(data: any): boolean {
    try {
      const json: IReporter2000Data = this.toJson(data);
      return !!json.localisation && !!json.localisation._attributes && !!json.localisation.date;
    } catch (err) {
      return false;
    }
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

  parse(data: any): Radar {
    const json: IReporter2000Data = this.toJson(data);
    const incidents: IRadarIncident[] = [];
    const localisation = json.localisation._attributes.loc;
    let date = json.localisation.date;

    if (!Array.isArray(date)) {
      date = [date];
    }

    for (let i = 0; i < date.length; i++) {
      const incidentsFromDate: IRadarIncident[] = this.getIncidentsByDate(date[i]);
      incidents.push(...incidentsFromDate);
    }
    return new Radar(localisation, incidents);
  }
}
