type VehicleParams={
    brand:string,
    model:string,
    year:number
}

class Vehicle {
    protected brand:string;
    protected model:string;
    protected year:number;
    constructor({brand, model, year}:VehicleParams){
        this.brand=brand;
        this.model=model;
        this.year=year;
    }
    protected getString():string {
        return `${this.brand} ${this.model} ${this.year} `
    }
}

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



