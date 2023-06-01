import {IRadarVehicle, RadarVehicle} from "./RadarVehicle";

export interface IRadarIncident {
  speed: number,
  license: string,
  date: string,
  evidenceUrl?: string,
  vehicle?: IRadarVehicle
}

export class RadarIncident {
  constructor(
    private readonly incident: IRadarIncident
  ) { }

  speed(): number {
    return this.incident.speed;
  }

  license(): string {
    return this.incident.license;
  }

  date(): Date {
    return new Date(this.incident.date);
  }

  evidenceUrl(): string | undefined {
    return this.incident.evidenceUrl;
  }

  vehicle(): RadarVehicle | undefined {
    return new RadarVehicle(this.incident.vehicle);
  }

  value() {
    return {
      speed: this.speed(),
      license: this.license(),
      date: this.date(),
      evidenceUrl: this.evidenceUrl(),
      vehicle: this.vehicle()?.value(),
    }
  }
}