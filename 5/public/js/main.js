"use strict";
const people = [
    {
        name: 'Jonas',
        surname: 'Jonaitis',
        sex: 'male',
        age: 26,
        income: 1200,
        married: false,
        hasCar: false,
    },
    {
        name: 'Severija',
        surname: 'Piktutytė',
        sex: 'female',
        age: 26,
        income: 1300,
        married: false,
        hasCar: true,
    },
    {
        name: 'Valdas',
        surname: 'Vilktorinas',
        sex: 'male',
        age: 16,
        income: 0,
        married: false,
        hasCar: false,
    },
    {
        name: 'Virginijus',
        surname: 'Uostauskas',
        sex: 'male',
        age: 32,
        income: 2400,
        married: true,
        hasCar: true,
    },
    {
        name: 'Samanta',
        surname: 'Uostauskienė',
        sex: 'female',
        age: 28,
        income: 1200,
        married: true,
        hasCar: true,
    },
    {
        name: 'Janina',
        surname: 'Stalautinskienė',
        sex: 'female',
        age: 72,
        income: 364,
        married: false,
        hasCar: false,
    },
];
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
    const personToIdentity = ({ name, surname }) => ({ name, surname });
    const identities = people.map(personToIdentity);
    console.table(people);
    console.table(identities);
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
    const selectTaskProps = ({ married, hasCar }) => ({
        married: Boolean(married),
        hasCar: Boolean(hasCar),
    });
    const result = people.map(selectTaskProps);
    console.table(people);
    console.table(result);
}
console.groupEnd();
console.groupCollapsed('3. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
    {
        const personToIdentity = ({ name, surname, sex }) => ({ name, surname, sex });
        const sexIdentities = people.map(personToIdentity);
        console.table(people);
        console.table(sexIdentities);
    }
}
console.groupEnd();
console.groupCollapsed('4. Suformuokite visų vyrų masyvą');
{
    const dieduFiltras = (Zmogus) => (Zmogus.sex == 'male');
    const Vyrai = people.filter(dieduFiltras);
    console.table(people);
    console.table(Vyrai);
}
console.groupEnd();
console.groupCollapsed('5. Suformuokite visų moterų masyvą');
{
    {
        const bobuFiltras = (Zmogus) => (Zmogus.sex != 'male');
        const Bobos = people.filter(bobuFiltras);
        console.table(people);
        console.table(Bobos);
    }
}
console.groupEnd();
console.groupCollapsed('6. Suformuokite objektų masyvą su žmonių vardais ir pavardėm, kurie turi mašinas');
{
    const Filtras = (Zmogus) => (Zmogus.hasCar == true);
    const personToIdentity = ({ name, surname }) => ({ name, surname });
    const identities = people.filter(Filtras).map(personToIdentity);
    console.table(people);
    console.table(identities);
}
console.groupEnd();
console.groupCollapsed('7. Suformuokite objektų masyvą iš žmonių kurie yra susituokę');
{
    const Filtras = (Zmogus) => (Zmogus.married == true);
    const identities = people.filter(Filtras);
    console.table(people);
    console.table(identities);
}
console.groupEnd();
console.groupCollapsed('8. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
    const VyruFiltras = (Zmogus) => (Zmogus.sex == 'male' && Zmogus.hasCar == true);
    const MoteruFiltras = (Zmogus) => (Zmogus.sex == 'female' && Zmogus.hasCar == true);
    const averages = {
        male: people.filter(VyruFiltras).length,
        female: people.filter(MoteruFiltras).length
    };
    console.table(people);
    console.table(averages);
}
console.groupEnd();
console.groupCollapsed('9. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
    function personToIdentity({ name, surname, sex, age, income, married, hasCar }) {
        let rObj = { name: name, surname: surname, sex: sex, age: age, salary: income, married: married, hasCar: hasCar };
        return rObj;
    }
    const identities = people.map(personToIdentity);
    console.table(people);
    console.table(identities);
}
console.groupEnd();
console.groupCollapsed('10. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
    const personToIdentity = ({ age, income, married, hasCar }) => ({ age, income, married, hasCar });
    const identities = people.map(personToIdentity);
    console.table(people);
    console.table(identities);
}
console.groupEnd();
console.groupCollapsed('11. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
    function personToIdentity({ name, surname, sex, age, income, married, hasCar }) {
        let rObj = { fullname: name + " " + surname, sex: sex, age: age, income, married: married, hasCar: hasCar };
        return rObj;
    }
    const identities = people.map(personToIdentity);
    console.table(people);
    console.table(identities);
}
console.groupEnd();
//# sourceMappingURL=main.js.map