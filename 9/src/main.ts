import LandVehicle from './LandVehicle.js';
import AirVehicle from './AirVehicle.js';
import WaterVehicle from './WaterVehicle.js';


const vehicles: (LandVehicle | AirVehicle | WaterVehicle)[] = [
    new LandVehicle({
        brand: 'Toyota',
        model: 'Corola',
        year: 2005,
      },
      ['Delux 200 m&s', 'Delux 200 m&s', 'Fairtex 200 m&s', 'Fairtex 200 m&s']
     ),
    new LandVehicle(
        {
            brand: 'Nisan',
            model: 'Qashqai',
            year: 2007,
          },
      ['Delux 200 m&s', 'Delux 200 m&s', 'Fairtex 200 m&s', 'Fairtex 200 m&s']
    ),
    new AirVehicle(
     {
      brand: 'Jeti',
      model: 'Nitro',
      year: 2015,
    },
    7000
    ),
    new AirVehicle( {
      brand: 'Falcon',
      model: 'Bamasi',
      year: 2012,
    },
    5000
    ),
    new WaterVehicle({
      brand: 'Sailor',
      model: 'Ocean 3000',
      year: 2011,
    },30
    ),
    new WaterVehicle( {
      brand: 'LandScraper',
      model: 'Fagotti',
      year: 202,
    },
    14),
  ];
  
  vehicles.forEach(v => console.log(v.toString()));






