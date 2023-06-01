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

export interface IReporter2000Data {
  localisation: IReporterLocalisation,
}