"use strict";
class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getString() {
        return `${this.brand} ${this.model} ${this.year} `;
    }
}
class WaterVehicle extends Vehicle {
    constructor(brand, model, year, maxDepth) {
        super(brand, model, year);
        this.maxDepth = maxDepth;
    }
    getString() {
        return super.getString() + ` ${this.maxDepth}`;
    }
}
class LandVehicle extends Vehicle {
    constructor(brand, model, year, tires) {
        super(brand, model, year);
        this.tires = tires;
    }
    getString() {
        return super.getString() + ` ${this.tires}`;
    }
}
class AirVehicle extends Vehicle {
    constructor(brand, model, year, maxAltitude) {
        super(brand, model, year);
        this.maxAltitude = maxAltitude;
    }
    getString() {
        return super.getString() + ` ${this.maxAltitude}`;
    }
}
//# sourceMappingURL=main.js.map