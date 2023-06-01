"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadarVehicle = void 0;
class RadarVehicle {
    constructor(vehicle) {
        this.vehicle = vehicle;
    }
    type() {
        var _a;
        return (_a = this.vehicle) === null || _a === void 0 ? void 0 : _a.type;
    }
    brand() {
        var _a;
        return (_a = this.vehicle) === null || _a === void 0 ? void 0 : _a.brand;
    }
    value() {
        return {
            type: this.type(),
            brand: this.brand(),
        };
    }
}
exports.RadarVehicle = RadarVehicle;
