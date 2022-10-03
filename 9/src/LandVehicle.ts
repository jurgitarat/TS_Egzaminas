import Vehicle, { VehicleParams } from "./vehicle.js";
class  LandVehicle extends Vehicle{
    private tires:string[];
    constructor(params:VehicleParams,  tires:string[]){
        super(params);
        this.tires=tires;
    }
    public override getString(): string {
        return super.getString() + ` ${this.tires}`;
    }
}
export default LandVehicle;