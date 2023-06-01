"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reporter2000XML = void 0;
const Radar_1 = require("../models/Radar");
const xml_js_1 = __importDefault(require("xml-js"));
class Reporter2000XML {
    constructor() {
        this.getIncidentsByDate = (xmlIncident) => {
            const incidents = [];
            let drivers = xmlIncident.driver;
            const date = xmlIncident._attributes.day;
            if (!Array.isArray(drivers)) {
                drivers = [drivers];
            }
            for (let i = 0; i < drivers.length; i++) {
                const driver = drivers[i]._attributes;
                const { speed, license, brand, type } = driver;
                const incident = {
                    speed: Number(speed),
                    license,
                    date,
                    vehicle: {
                        brand,
                        type,
                    },
                };
                incidents.push(incident);
            }
            return incidents;
        };
    }
    isSupported(data) {
        try {
            const json = this.toJson(data);
            return !!json.localisation && !!json.localisation._attributes && !!json.localisation.date;
        }
        catch (err) {
            return false;
        }
    }
    toJson(xml) {
        const result = xml_js_1.default.xml2json(xml, { compact: true });
        return JSON.parse(result);
    }
    parse(data) {
        const json = this.toJson(data);
        const incidents = [];
        const localisation = json.localisation._attributes.loc;
        let date = json.localisation.date;
        if (!Array.isArray(date)) {
            date = [date];
        }
        for (let i = 0; i < date.length; i++) {
            const incidentsFromDate = this.getIncidentsByDate(date[i]);
            incidents.push(...incidentsFromDate);
        }
        return new Radar_1.Radar(localisation, incidents);
    }
}
exports.Reporter2000XML = Reporter2000XML;
