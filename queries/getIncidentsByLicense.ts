import {InMemoryRadarRepository} from "../repositories/InMemoryRadarRepository";

export default (license: string) => {
  try {
    const repository = new InMemoryRadarRepository();
    return repository.getIncidentsByLicense(license);
  } catch(err) {
    console.log(err);
  }
}