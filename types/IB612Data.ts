export interface IB612 {
  name: string,
  localisation: string,
  reports: IB612Report[]
}

export interface IB612Report {
  licencePlate: string,
  speed: string,
  date: string,
  evidenceUrl: string
}