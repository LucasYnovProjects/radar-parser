"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadarFactory = void 0;
const AwesomeRadar_1 = require("./AwesomeRadar");
const B612Radar_1 = require("./B612Radar");
const RadarFormatNotSupported_1 = require("./errors/RadarFormatNotSupported");
const Reporter2000XML_1 = require("./Reporter2000XML");
class RadarFactory {
    constructor(data) {
        this.data = data;
    }
    parse() {
        const formatAdapters = [
            new AwesomeRadar_1.AwesomeRadar(),
            new B612Radar_1.B612Radar(),
            new Reporter2000XML_1.Reporter2000XML(),
        ];
        const adapter = formatAdapters.find((currentAdapter) => currentAdapter.isSupported(this.data));
        if (!adapter) {
            throw new RadarFormatNotSupported_1.RadarFormatNotSupported();
        }
        return adapter.parse(this.data);
    }
}
exports.RadarFactory = RadarFactory;
