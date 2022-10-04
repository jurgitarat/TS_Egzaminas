"use strict";
class Person {
    constructor({ id, name, surname }) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
    getPersonInfo() {
        return `${this.name} ${this.surname}, ${this.id} \n`;
    }
}
class Employee extends Person {
}
class Job {
    constructor(title, pay) {
        this.title = title;
        this.pay = pay;
        this.finished = false;
        this.payed = false;
        this.id = "task" + Math.floor((Math.random() * 100000) + 1);
        this.finished = false;
        this.payed = false;
    }
    completeJob() {
        this.finished = true;
        this.dateFinished = new Date();
    }
    setJobPayed() { this.payed = true; }
    getPay() { return this.pay; }
    isFinished() { return this.finished; }
    isPayed() { return this.payed; }
    toString() {
        return `Darbas ${this.id} ${this.title} ` + (this.finished ? `yra baigtas ${this.dateFinished}` : 'nėra baigtas') +
            `\n Už šį darbą ` + (this.payed ? `yra sumokėta ${this.pay}` : `bus sumokėta ${this.pay}`);
    }
}
class BuisnessLicencePerson extends Employee {
    constructor(params, jobs) {
        super(params);
        this.jobs = jobs;
    }
    calcPay() {
        let pay = 0;
        for (let i = 0; i < this.jobs.length; i++) {
            pay += this.jobs[i].getPay();
        }
        return pay;
    }
    toString() {
        return `${super.getPersonInfo()} bus sumokėta ${this.calcPay()}`;
    }
}
class SelfEmployedPerson extends Employee {
    constructor(params, hourPay, hoursWorked) {
        super(params);
        this.hourPay = hourPay;
        this.hoursWorked = hoursWorked;
    }
    calcPay() {
        return this.hourPay * this.hoursWorked;
    }
    toString() {
        return `${super.getPersonInfo()} bus sumokėta ${this.calcPay()}`;
    }
}
class WorkPerson extends Employee {
    constructor(params, hourPay, fullTimeEquivalent) {
        super(params);
        this.hourPay = hourPay;
        this.fullTimeEquivalent = fullTimeEquivalent;
    }
    calcPay() {
        return this.hourPay * this.fullTimeEquivalent;
    }
    toString() {
        return `${super.getPersonInfo()} bus sumokėta ${this.calcPay()}`;
    }
}
const backendDeveloper = new WorkPerson({
    id: '25169845878',
    name: 'Apsas',
    surname: 'Revestenis'
}, 25, 1);
const frontendDeveloper = new WorkPerson({
    id: '25167745878',
    name: 'Eventas',
    surname: 'Klikauskas'
}, 25, 0.5);
const selfEmployed1 = new SelfEmployedPerson({
    id: '25169845878',
    name: 'Beribė',
    surname: 'Jūračka'
}, 25, 10);
const selfEmployed2 = new SelfEmployedPerson({
    id: '25169145878',
    name: 'Fanalijus',
    surname: 'Analijus'
}, 10, 0);
const designer = new BuisnessLicencePerson({
    id: '15169845878',
    name: 'Plunksytė',
    surname: 'Krupštytė',
}, []);
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
}, jobs);
const employees = [
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
//# sourceMappingURL=main.js.map