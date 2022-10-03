import Vehicle, {VehicleParams} from './vehicle.js';
class  WaterVehicle extends Vehicle{
    private maxDepth:number;
    constructor(params:VehicleParams, maxDepth:number){
        super(params);
        this.maxDepth=maxDepth;
    }
    public override getString(): string {
        return super.getString() + ` ${this.maxDepth}`;
    }
}
export default WaterVehicle;