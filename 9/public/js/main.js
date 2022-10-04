"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LandVehicle_js_1 = require("./LandVehicle.js");
const AirVehicle_js_1 = require("./AirVehicle.js");
const WaterVehicle_js_1 = require("./WaterVehicle.js");
const vehicles = [
    new LandVehicle_js_1.default({
        brand: 'Toyota',
        model: 'Corola',
        year: 2005,
    }, ['Delux 200 m&s', 'Delux 200 m&s', 'Fairtex 200 m&s', 'Fairtex 200 m&s']),
    new LandVehicle_js_1.default({
        brand: 'Nisan',
        model: 'Qashqai',
        year: 2007,
    }, ['Delux 200 m&s', 'Delux 200 m&s', 'Fairtex 200 m&s', 'Fairtex 200 m&s']),
    new AirVehicle_js_1.default({
        brand: 'Jeti',
        model: 'Nitro',
        year: 2015,
    }, 7000),
    new AirVehicle_js_1.default({
        brand: 'Falcon',
        model: 'Bamasi',
        year: 2012,
    }, 5000),
    new WaterVehicle_js_1.default({
        brand: 'Sailor',
        model: 'Ocean 3000',
        year: 2011,
    }, 30),
    new WaterVehicle_js_1.default({
        brand: 'LandScraper',
        model: 'Fagotti',
        year: 202,
    }, 14),
];
vehicles.forEach(v => console.log(v.toString()));
//# sourceMappingURL=main.js.map