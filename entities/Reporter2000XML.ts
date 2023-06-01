import { IRadarData } from "../types/interfaces";

const getIncidentsByDate = (xmlIncident: any) => {
  const incidents = [];
  let drivers = xmlIncident.driver;
  const date = xmlIncident["$"].day;

  if (!Array.isArray(drivers)) {
    drivers = [drivers];
  }

  for (let i = 0; i < drivers.length; i++) {
    const driver = drivers[i]["$"];
    const { speed, license, brand, type } = driver;
    const incident = {
      speed,
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

export class Reporter2000XML {
  constructor() {}

  parse(data: any): IRadarData {
    const radarData: IRadarData = {
      localisation: "",
      incidents: [],
    };

    radarData.localisation = data.localisation["$"].loc;

    let date = data.localisation.date;

    radarData.incidents = [];

    if (!Array.isArray(date)) {
      date = [date];
    }

    for (let i = 0; i < date.length; i++) {
      const incidents = getIncidentsByDate(date[i]);
      radarData.incidents.push(...incidents);
    }

    return radarData;
  }
}
