import {InMemoryRadarRepository} from "../repositories/InMemoryRadarRepository";

export default (date: string) => {
  const repository = new InMemoryRadarRepository();
  return repository.findByDate(date);
}