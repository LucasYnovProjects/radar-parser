"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RadarFactory_1 = require("../radars/RadarFactory");
const RadarFormatNotSupported_1 = require("../radars/errors/RadarFormatNotSupported");
const InMemoryRadarRepository_1 = require("../repositories/InMemoryRadarRepository");
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
    const adapter = new RadarFactory_1.RadarFactory(data);
    try {
        const radar = adapter.parse();
        const data = radar.value();
        const repo = new InMemoryRadarRepository_1.InMemoryRadarRepository().findByDate("2023-01-01");
        console.log(repo);
    }
    catch (err) {
        if (err instanceof RadarFormatNotSupported_1.RadarFormatNotSupported) {
            return console.error("blabla");
        }
        console.error("blabla");
    }
};
exports.default = fetchAll;
