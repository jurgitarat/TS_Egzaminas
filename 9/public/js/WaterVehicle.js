"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vehicle_js_1 = require("./vehicle.js");
class WaterVehicle extends vehicle_js_1.default {
    constructor(params, maxDepth) {
        super(params);
        this.maxDepth = maxDepth;
    }
    getString() {
        return super.getString() + ` ${this.maxDepth}`;
    }
}
exports.default = WaterVehicle;
//# sourceMappingURL=WaterVehicle.js.map