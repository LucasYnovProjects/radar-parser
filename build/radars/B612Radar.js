"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B612Radar = void 0;
const Radar_1 = require("../models/Radar");
class B612Radar {
    parse(data) {
        const results = [];
        const localisation = data.localisation;
        data.reports.forEach((element) => {
            const incident = {
                speed: parseInt(element.speed.replace('km/h', '')),
                license: element.licensePlate,
                date: element.date,
                evidenceUrl: element.evidenceUrl
            };
            results.push(incident);
        });
        return new Radar_1.Radar(localisation, results);
    }
    isSupported(data) {
        const keys = Object.keys(data);
        return keys.length === 3 && !!data.name && !!data.localisation && !!data.reports;
    }
}
exports.B612Radar = B612Radar;
