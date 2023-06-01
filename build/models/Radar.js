"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radar = void 0;
const RadarIncident_1 = require("./RadarIncident");
const RadarLocalisation_1 = require("./RadarLocalisation");
class Radar {
    constructor(localisation, incidents) {
        this.localisation = localisation;
        this.incidents = incidents;
    }
    getIncidents() {
        return this.incidents.map((incident) => new RadarIncident_1.RadarIncident(incident));
    }
    getLocalisation() {
        return new RadarLocalisation_1.RadarLocalisation(this.localisation);
    }
    value() {
        return {
            localisation: this.localisation,
            incidents: this.incidents,
        };
    }
}
exports.Radar = Radar;
