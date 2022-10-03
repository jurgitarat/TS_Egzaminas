"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Vehicle;
//# sourceMappingURL=vehicle.js.map