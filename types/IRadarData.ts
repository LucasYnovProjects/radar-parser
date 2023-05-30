interface IRadarVehicle {
  type?: string,
  brand?: string,
}

interface IRadarIncident {
  speed: number,
  license: string,
  date: Date,
  evidenceUrl?: string,
  vehicle?: IRadarVehicle
}

export interface IRadarData {
  localisation: string,
  incidents: IRadarIncident[]
}