import Vehicle, {VehicleParams} from './vehicle.js';
class  AirVehicle extends Vehicle{
    private maxAltitude:number;
    constructor(params:VehicleParams,  maxAltitude:number){
        super(params);
        this.maxAltitude=maxAltitude;
    }    
    public override getString(): string {
        return super.getString() + ` ${this.maxAltitude}`;
    }
}

export default AirVehicle;