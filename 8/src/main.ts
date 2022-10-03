enum heightUnits {
    cm='cm',
    m='m',
    in='in'
};
enum weightUnits {
    kg='kg',
    lb='lb'
};
type heightData = [number|undefined, heightUnits];
type weightData = [number|undefined, weightUnits];

class Person {
    private name:string;
    private surname:string;
    private age?:number;
    private height?:number;
    private weight?:number;
    static heightUnit:heightUnits=heightUnits.cm;
    static weightUnit:weightUnits=weightUnits.kg;
    constructor (name:string, surname:string){
        this.name=name;
        this.surname=surname;
    }
    public setName(name:string):void{
        this.name=name;
    }
    public setSurname(surname:string):void{
        this.surname=surname;
    }
    public getFullname():string{
        return this.name+' '+this.surname
    }
    public setAge(age:number):void{
        if (age>=1 &&age <=150 && Number.isInteger(age))
            this.age=age;
        else 
        console.error("Age turi buti tik sveiki skaiciai nuo 1 iki 150");
    }
    public setHeight(height:number,unit?:heightUnits){
            this.height=height;
        if (unit){
            Person.heightUnit=unit;
        }
    }
    public setWeight(weight:number,unit?:weightUnits){
        this.weight=weight;
        
        if (unit){
            Person.weightUnit=unit;
        }
    }
    public getAge():number|undefined{
        return this.age;
    }
    public getHeight():heightData{
        return [this.height,Person.heightUnit];
    }
    public getWeight():weightData{
        return [this.weight,Person.weightUnit];
    }

    public toString(){
        return `${this.name} ${this.surname}\n\t${this.height} ${Person.heightUnit}\n\t${this.weight} ${Person.weightUnit}\n`;
    }
}

const jonas:Person=new Person("Jonas", "Petraitis");
const petras:Person=new Person("Petras", "Jonaitis");
console.group('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai iš jų sukurkite setterius, ir bendrą getterį fullname');
{
    console.log(jonas.getFullname());
    console.log(petras.getFullname());
    jonas.setName("Antanas");
    petras.setSurname("Petraitis");
    console.log(jonas.getFullname());
    console.log(petras.getFullname());
}
console.groupEnd();

console.group('2. Sukurkite Person klasei savybę "age". Inkapsuliuokite šią savybę taip, jog reikšmė galėtų būti tik sveiki skaičiai nuo 1 iki 150');
{
    jonas.setAge(120);
    petras.setAge(16);
    console.log({
        JonasAge:jonas.getAge(),
        petrasAge:petras.getAge()
    })
}
console.groupEnd();

console.group('3. Sukurkite Person klasei savybę "height" kurios vertė būtų saugoma centimetrais. Sukurkite šiai savybei setterį, kuris pirmu parametru priimtų reikšmę, o antru parametru priimtų matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras nėra perduotas, numatytas(default) matavimo vienetas turi būti cm. Getteris turi grąžinti reikšmę centimetrais.');
{
    jonas.setHeight(150);
    petras.setHeight(80, heightUnits.in)

    console.log({
        JonasHeight:jonas.getHeight(),
        petrasHeight:petras.getHeight()
    })
    
}
console.groupEnd();

console.group('4. Sukurkite Person klasei statinę savybę "heightUnits". Jos tipas turi būti išvardinimas(enum), kurio pasirinkimai yra: "CM", "M", "IN". Numatytoji(default) "heightUnits" reikšmė turi būti centimetrai');
{

}
console.groupEnd();

console.group('5. "height" setterio antram parametrui pakeiskite sąjungos tipą į [4.] užduotyje sukurtą išvardinimą(enum). Priderinkite pavyzdžius ir metodą.');

console.group('6. "height" geteriui sukurkite logiką, jog jis grąžintų matavimo vienetus, pagal statinės savybės "heightUnits" reikšmę.');
{

    console.log({
        JonasHeight:jonas.getHeight(),
        petrasHeight:petras.getHeight()
    })
}
console.groupEnd();

console.group('7. Analogiškai pagal [4.]-[6.] punktus sukurkite savybę weight su statiniu išvardinimu "weightUnits", kurio pasirinkimai turi būti: "KG", "LBS"');
{
    jonas.setWeight(60);
    petras.setWeight(250, weightUnits.lb)

    console.log({
        JonasWeight:jonas.getWeight(),
        petrasWeight:petras.getWeight()
    })
}
console.groupEnd();

console.group('8. Sukurkite klasei Person metodą "toString". Kuris paverstų žmogaus savybes gražiu formatu: vardas ir pavardė pirmoje eilutėje, o "height" ir "weight" savybės atskirose eilutėse, atitrauktos nuo kairio krašto per "tab" simbolį, ir su matavimo vienetais(kurie išsaugoti) statinėse Person klasės savybėse');{
console.log(jonas.toString());

console.log(petras.toString());
    
}

console.groupEnd();