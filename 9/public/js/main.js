"use strict";
class Vehicle {
    constructor({ brand, model, year }) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getString() {
        return `${this.brand} ${this.model} ${this.year} `;
    }
}
class WaterVehicle extends Vehicle {
    constructor(params, maxDepth) {
        super(params);
        this.maxDepth = maxDepth;
    }
    getString() {
        return super.getString() + ` ${this.maxDepth}`;
    }
}
class LandVehicle extends Vehicle {
    constructor(params, tires) {
        super(params);
        this.tires = tires;
    }
    getString() {
        return super.getString() + ` ${this.tires}`;
    }
}
class AirVehicle extends Vehicle {
    constructor(params, maxAltitude) {
        super(params);
        this.maxAltitude = maxAltitude;
    }
    getString() {
        return super.getString() + ` ${this.maxAltitude}`;
    }
}
//# sourceMappingURL=main.js.map