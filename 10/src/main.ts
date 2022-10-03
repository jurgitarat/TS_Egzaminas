type personParams={
    id:string,
    name:string,
    surname:string
}

abstract class Person{
    protected id:string;
    protected name:string;
    protected surname:string;

constructor({id,name,surname}:personParams){
    this.id=id;
    this.name=name;
    this.surname=surname;
}
public getPersonInfo(): string{
    return `${this.name} ${this.surname}, ${this.id} \n`

}
public abstract toString(): string;
}

abstract class Employee extends Person{
    public abstract calcPay(): number;
}

class Job{
    private id: string;
    private finished: boolean = false;
    private payed: boolean = false;
    private dateFinished?: Date;
    constructor(private title: string, private pay: number) {
        this.id = "task"+Math.floor((Math.random() * 100000) + 1);
        this.finished = false;
        this.payed = false;
      }
    public completeJob (): void{
        this.finished=true; 
        this.dateFinished = new Date();
    }
    public setJobPayed(): void{ this.payed=true;}
    public getPay(): number{return this.pay; }
    public isFinished(): boolean{ return this.finished}
    public isPayed():boolean { return this.payed;}
    public toString(): string{
        return `Darbas ${this.id} ${this.title} `+ (this.finished ? `yra baigtas ${this.dateFinished}`  : 'nėra baigtas') + 
        `\n Už šį darbą `+(this.payed ? `yra sumokėta ${this.pay}`  : `bus sumokėta ${this.pay}`)
        

    }

}

class BuisnessLicencePerson extends Employee{
    private jobs: Job[];
    constructor (jobs:Job[], params:personParams) {
        super(params);
        this.jobs=jobs;
    }
    public calcPay(): number{
        let pay:number=0;
        for (let i=0; i<this.jobs.length; i++){
            pay+=this.jobs[i].getPay();
        }
        return pay;
    }
    public override toString(): string{
        return `${super.getPersonInfo} bus sumokėta ${this.calcPay()}`;
    }
}

class SelfEmployedPerson extends Employee{
    private hourPay: number;
    private hoursWorked: number;
    constructor (hourPay:number, hoursWorked:number,params:personParams){
        super(params);
        this.hourPay=hourPay;
        this.hoursWorked=hoursWorked;
    }
    public calcPay():number{
        return this.hourPay* this.hoursWorked;
    }
    public override toString(): string{
        return `${super.getPersonInfo} bus sumokėta ${this.calcPay()}`;
    }
}

class WorkPerson extends Employee {
    private hourPay: number;
    private fullTimeEquivalent: number;
    constructor (hourPay:number, fullTimeEquivalent:number,params:personParams){
        super(params);
        this.hourPay=hourPay;
        this.fullTimeEquivalent=fullTimeEquivalent;
    }
    public calcPay(): number{
        return this.hourPay * this.fullTimeEquivalent;
    }
    public override toString(): string{
        return `${super.getPersonInfo} bus sumokėta ${this.calcPay()}`;
    }
}