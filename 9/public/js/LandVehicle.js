"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vehicle_js_1 = require("./vehicle.js");
class LandVehicle extends vehicle_js_1.default {
    constructor(params, tires) {
        super(params);
        this.tires = tires;
    }
    getString() {
        return super.getString() + ` ${this.tires}`;
    }
}
exports.default = LandVehicle;
//# sourceMappingURL=LandVehicle.js.map