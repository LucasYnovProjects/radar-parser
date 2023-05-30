interface IAwesomeRadarMetadata {
  localisation: string,
  speedThreshold: number,
}

type IAwesomeRadarIncident = string[][];

export interface IAwesomeRadarData {
  metadata: IAwesomeRadarMetadata,
  incidents: IAwesomeRadarIncident
}