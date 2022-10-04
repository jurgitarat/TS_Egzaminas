"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vehicle_js_1 = require("./vehicle.js");
class AirVehicle extends vehicle_js_1.default {
    constructor(params, maxAltitude) {
        super(params);
        this.maxAltitude = maxAltitude;
    }
    getString() {
        return super.getString() + ` ${this.maxAltitude}`;
    }
}
exports.default = AirVehicle;
//# sourceMappingURL=AirVehicle.js.map