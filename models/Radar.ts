import {RadarIncident, IRadarIncident} from "./RadarIncident";
import {RadarLocalisation} from "./RadarLocalisation";

export class Radar {
  constructor(
    private readonly localisation: string | undefined,
    private readonly incidents: IRadarIncident[]
  ) { }

  getIncidents(): RadarIncident[] {
    return this.incidents.map((incident) => new RadarIncident(incident));
  }

  getLocalisation(): RadarLocalisation {
    return new RadarLocalisation(this.localisation);
  }

  value() {
    return {
      localisation: this.localisation,
      incidents: this.incidents,
    };
  }
}