import {Radar} from "../models/Radar";
import {RadarFactory} from "../radars/RadarFactory";
import {RadarFormatNotSupported} from "../radars/errors/RadarFormatNotSupported";
import {InMemoryRadarRepository} from "../repositories/InMemoryRadarRepository";

const data = {
  "metadata": {
    "localisation": "Lyon 7e",
    "speedThreshold": 90,
  },
  "incidents": [
    ["BH-686-AM", "2023-01-01T00:00:00Z"],
    ["BH-686-AM", "2023-01-01T00:00:00Z"],
    ["BH-686-AM", "2023-01-01T00:00:00Z"]
  ]
};

const fetchAll = () => {
  const adapter = new RadarFactory(data);
  try {
    const radar: Radar = adapter.parse();
    const data = radar.value();
    const repo = new InMemoryRadarRepository().findByDate("2023-01-01");
    console.log(repo);
  } catch (err) {
    if (err instanceof RadarFormatNotSupported) {
      return console.error("blabla")
    }
    console.error("blabla")
  }
};

export default fetchAll;