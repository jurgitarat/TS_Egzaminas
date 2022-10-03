export type VehicleParams={
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

export default Vehicle;