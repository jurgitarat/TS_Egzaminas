class Vehicle {
    protected brand:string;
    protected model:string;
    protected year:number;
    constructor(brand:string, model:string, year:number){
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
    constructor(brand:string, model:string, year:number, maxDepth:number){
        super(brand,model,year);
        this.maxDepth=maxDepth;
    }
    public override getString(): string {
        return super.getString() + ` ${this.maxDepth}`;
    }
}

class  LandVehicle extends Vehicle{
    private tires:string[];
    constructor(brand:string, model:string, year:number, tires:string[]){
        super(brand,model,year);
        this.tires=tires;
    }
    public override getString(): string {
        return super.getString() + ` ${this.tires}`;
    }
}

class  AirVehicle extends Vehicle{
    private maxAltitude:number;
    constructor(brand:string, model:string, year:number, maxAltitude:number){
        super(brand,model,year);
        this.maxAltitude=maxAltitude;
    }    
    public override getString(): string {
        return super.getString() + ` ${this.maxAltitude}`;
    }
}



