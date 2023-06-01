import {RadarIncident} from "./RadarIncident";
import {RadarLocalisation} from "./RadarLocalisation";

export class Radar {
  constructor(
    private readonly localisation: RadarLocalisation,
    private readonly incidents: RadarIncident[]
  ) { }

  getIncidents(): RadarIncident[] {
    return this.incidents;
  }

  getLocalisation(): RadarLocalisation {
    return this.localisation;
  }

  value() {
    return {
      localisation: this.localisation.value(),
      incidents: this.incidents.map((incident: RadarIncident) => incident.value()),
    }
  }
}