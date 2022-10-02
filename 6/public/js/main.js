"use strict";
const masyvas = ["trys", "japonai", "valgo", "kiauliena"];
console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
    function grazintiPirma(masyvas) {
        return masyvas[0];
    }
    console.table(masyvas);
    console.log({ pimasElementas: grazintiPirma(masyvas) });
}
console.groupEnd();
console.group('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
    function grazintiPaskutini(masyvas) {
        return masyvas[masyvas.length - 1];
    }
    const masyvas = ["trys", "japonai", "valgo", "kiauliena"];
    console.table(masyvas);
    console.log({ paskutinisElementas: grazintiPaskutini(masyvas) });
}
console.groupEnd();
console.group('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
    function masyvoKopija(masyvas) {
        return [...masyvas];
    }
    const masyvas = ["trys", "japonai", "valgo", "kiauliena"];
    console.table(masyvas);
    console.table(masyvoKopija(masyvas));
}
console.groupEnd();
console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{
    function masyvoSukurimas(primityvus, skaicius) {
        let masyvas = new Array();
        for (let i = 0; i < skaicius; i++) {
            masyvas.push(primityvus);
        }
        return masyvas;
    }
    console.log({
        "('a', 2)": masyvoSukurimas('a', 2),
        "(77, 4)": masyvoSukurimas(77, 4),
        "(true, 1)": masyvoSukurimas(true, 1)
    });
}
console.groupEnd();
console.group('5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą');
{
    function masyvoSujungimas(pirmas, antras) {
        return pirmas.concat(antras);
    }
    console.log({
        "(['ab','aaa','bbbb'], ['ccc','ddd'])": masyvoSujungimas(['ab', 'aaa', 'bbbb'], ['ccc', 'ddd']),
        "([true,false,true], [true])": masyvoSujungimas([true, false, true], [true]),
        "([2,0], ['1'])": masyvoSujungimas([2, 0], [1])
    });
}
console.groupEnd();
console.group('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
{
    function funkcija(reiksme) {
        return {
            setValue: (naujaReiksme) => reiksme = naujaReiksme,
            getValue: () => reiksme
        };
    }
    const object = funkcija("labas");
    console.log({
        objektasGet: object.getValue()
    });
    object.setValue("nea");
    console.log({
        objektasGet: object.getValue()
    });
    const object2 = funkcija(false);
    console.log({
        objektas2Get: object2.getValue()
    });
    object2.setValue(true);
    console.log({
        objektas2Get: object2.getValue()
    });
}
console.groupEnd();
console.group(`
  7. Turite 2 tipus: Student ir Worker kurie pasižymi bendrais bruožais Person. 
  Parašykite 2 funkcijas <isStudent> ir <isWorker> skirtas atpažinti koks objektas buvo perduotas.
  Sukūrę tokias funkcijas iteruokite per žmonių masyvą, sugrupuodami elementus pagal tipą`);
{
    const people = [
        { name: 'Atstovė', surname: 'Galtokaitė', university: 'VU', course: 2 },
        { name: 'Kurpius', surname: 'Medainis' },
        { name: 'Varnas', surname: 'Akilaitis', avgMonthlyPay: 2000 },
        { name: 'Ferodijus', surname: 'Cilcius' },
        { name: 'Sobora', surname: 'Kupolaityė', avgMonthlyPay: 1000 },
        { name: 'Zubrius', surname: 'Sulindauskas', university: 'VU', course: 2 },
        { name: 'Šidelė', surname: 'Gyslovienė', avgMonthlyPay: 1500 },
        { name: 'Užuodauskas', surname: 'Perrašimauskas', university: 'VGTU', course: 1 },
    ];
    function isStudent(testPerson) {
        return testPerson.university !== undefined;
    }
    function isWorker(testPerson) {
        return testPerson.avgMonthlyPay !== undefined;
    }
    const StudentuFiltras = (Zmogus) => (isStudent(Zmogus));
    const DarbininkuFiltras = (Zmogus) => (isWorker(Zmogus));
    const KituFiltras = (Zmogus) => (!isWorker(Zmogus) && !isStudent(Zmogus));
    console.log("Zmones");
    console.table(people);
    console.log("Studentai");
    console.table(people.filter(StudentuFiltras));
    console.log("Darbininkai");
    console.table(people.filter(DarbininkuFiltras));
    console.log("Kiti");
    console.table(people.filter(KituFiltras));
}
//# sourceMappingURL=main.js.map