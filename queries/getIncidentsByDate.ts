import {InMemoryRadarRepository} from "../repositories/InMemoryRadarRepository";

export default (date: string) => {
  try {
    const repository = new InMemoryRadarRepository();
    return repository.getIncidentsByDate(date);
  } catch(err) {
    console.log(err);
  }
}