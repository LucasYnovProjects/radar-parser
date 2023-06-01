"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwesomeRadar = void 0;
const Radar_1 = require("../models/Radar");
class AwesomeRadar {
    parse(data) {
        const localisation = data.metadata.localisation;
        const incidents = data.incidents.map((incident) => ({
            speed: data.metadata.speedThreshold,
            date: incident[1],
            license: `${incident[0]}`
        }));
        return new Radar_1.Radar(localisation, incidents);
    }
    isSupported(data) {
        const keys = Object.keys(data);
        return keys.length === 2 && !!data.incidents && !!data.metadata;
    }
}
exports.AwesomeRadar = AwesomeRadar;
