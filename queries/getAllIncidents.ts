import {InMemoryRadarRepository} from "../repositories/InMemoryRadarRepository";

export default () => {
  try {
    const repository = new InMemoryRadarRepository();
    return repository.getAllIncidents();
  } catch(err) {
    console.log(err);
  }
}