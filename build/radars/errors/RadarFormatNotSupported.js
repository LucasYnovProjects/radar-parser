"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadarFormatNotSupported = void 0;
class RadarFormatNotSupported extends Error {
    constructor() {
        super('Radar format is not supported');
    }
}
exports.RadarFormatNotSupported = RadarFormatNotSupported;
