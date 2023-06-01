import { b612 } from "../types/b612";
import { IRadarData, IRadarIncident } from "../types/IRadarData";

export class b612_parser {
    constructor(){
    }

    parse(data: b612): IRadarData {
        const results:IRadarIncident[] = [];
        data.reports.forEach(element => {
            results.push( 
                {
                    speed: parseInt(element.speed.replace('km/h', '')),
                    license: element.licencePlate,
                    date: new Date(element.date),
                    evidenceUrl: element.evidenceUrl
                }                
            )
        });
        return (
            {
                localisation: data.localisation,
                incidents: results
            }
        )
    }
}