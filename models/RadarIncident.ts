import {RadarVehicle} from "./RadarVehicle";

interface IRadarIncident {
  speed: number,
  license: string,
  date: Date,
  evidenceUrl?: string,
  vehicle?: RadarVehicle
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
    return this.incident.date;
  }

  evidenceUrl(): string | undefined {
    return this.incident.evidenceUrl;
  }

  vehicle(): RadarVehicle | undefined {
    return this.incident.vehicle;
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