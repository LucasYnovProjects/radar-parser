"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadarIncident = void 0;
const RadarVehicle_1 = require("./RadarVehicle");
class RadarIncident {
    constructor(incident) {
        this.incident = incident;
    }
    speed() {
        return this.incident.speed;
    }
    license() {
        return this.incident.license;
    }
    date() {
        return new Date(this.incident.date);
    }
    evidenceUrl() {
        return this.incident.evidenceUrl;
    }
    vehicle() {
        return new RadarVehicle_1.RadarVehicle(this.incident.vehicle);
    }
    value() {
        var _a;
        return {
            speed: this.speed(),
            license: this.license(),
            date: this.date(),
            evidenceUrl: this.evidenceUrl(),
            vehicle: (_a = this.vehicle()) === null || _a === void 0 ? void 0 : _a.value(),
        };
    }
}
exports.RadarIncident = RadarIncident;
