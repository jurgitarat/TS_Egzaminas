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
    constructor (params:personParams, jobs:Job[]) {
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
        return `${super.getPersonInfo()} bus sumokėta ${this.calcPay()}`;
    }
}

class SelfEmployedPerson extends Employee{
    private hourPay: number;
    private hoursWorked: number;
    constructor (params:personParams,hourPay:number, hoursWorked:number){
        super(params);
        this.hourPay=hourPay;
        this.hoursWorked=hoursWorked;
    }
    public calcPay():number{
        return this.hourPay* this.hoursWorked;
    }
    public override toString(): string{
        return `${super.getPersonInfo()} bus sumokėta ${this.calcPay()}`;
    }
}

class WorkPerson extends Employee {
    private hourPay: number;
    private fullTimeEquivalent: number;
    constructor (params:personParams, hourPay:number, fullTimeEquivalent:number){
        super(params);
        this.hourPay=hourPay;
        this.fullTimeEquivalent=fullTimeEquivalent;
    }
    public calcPay(): number{
        return this.hourPay * this.fullTimeEquivalent;
    }
    public override toString(): string{
        return `${super.getPersonInfo()} bus sumokėta ${this.calcPay()}`;
    }
}


const backendDeveloper = new WorkPerson({
    id: '25169845878',
    name: 'Apsas',
    surname: 'Revestenis'},
    25,
    1
  );
  const frontendDeveloper = new WorkPerson({
    id: '25167745878',
    name: 'Eventas',
    surname: 'Klikauskas'},
    25,
    0.5
  );
  
  const selfEmployed1 = new SelfEmployedPerson({
    id: '25169845878',
    name: 'Beribė',
    surname: 'Jūračka'},
    25,
    10
  );
  const selfEmployed2 = new SelfEmployedPerson({
    id: '25169145878',
    name: 'Fanalijus',
    surname: 'Analijus'},
    10,0
  );
  
  const designer = new BuisnessLicencePerson({
    id: '15169845878',
    name: 'Plunksytė',
    surname: 'Krupštytė',
  },[]);
  
  const jobs = [
    new Job('Facebook adds', 200),
    new Job('Google adds', 700),
    new Job('Twitter adds', 400),
  ];
  
  jobs[0].completeJob();
  jobs[2].completeJob();
  
  const marketingSpecialist = new BuisnessLicencePerson({
    id: '15169845878',
    name: 'Protenis',
    surname: 'Knistauskenis',
    },jobs);
  
  const employees: Employee[] = [
    backendDeveloper,
    frontendDeveloper,
    selfEmployed1,
    selfEmployed2,
    designer,
    marketingSpecialist,
  ];
  
  console.group('1. Atspausdinkite visus darbuotojus');
  employees.forEach((emp) => console.log(emp.toString()));
  console.groupEnd();
  
  console.group('2. Atspausdinkite visų darbuotojų atlyginimus');
  employees.forEach((emp) => {
    console.log(emp.getPersonInfo());
    console.log(emp.calcPay());
  });
  console.groupEnd();