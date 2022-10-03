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
    constructor(jobs, params) {
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
        return `${super.getPersonInfo} bus sumokėta ${this.calcPay()}`;
    }
}
class SelfEmployedPerson extends Employee {
    constructor(hourPay, hoursWorked, params) {
        super(params);
        this.hourPay = hourPay;
        this.hoursWorked = hoursWorked;
    }
    calcPay() {
        return this.hourPay * this.hoursWorked;
    }
    toString() {
        return `${super.getPersonInfo} bus sumokėta ${this.calcPay()}`;
    }
}
class WorkPerson extends Employee {
    constructor(hourPay, fullTimeEquivalent, params) {
        super(params);
        this.hourPay = hourPay;
        this.fullTimeEquivalent = fullTimeEquivalent;
    }
    calcPay() {
        return this.hourPay * this.fullTimeEquivalent;
    }
    toString() {
        return `${super.getPersonInfo} bus sumokėta ${this.calcPay()}`;
    }
}
//# sourceMappingURL=main.js.map