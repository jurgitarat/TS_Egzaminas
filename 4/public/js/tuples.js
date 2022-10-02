"use strict";
const person1 = ["Koridas", "Atmazas"];
const person2 = ["Paklodijus", "Pagalvė"];
const person3 = ["Višta", "Maumedienė"];
let currentAge = 18;
let currentHeight = 180;
const age = [currentAge, () => currentAge += 1];
const height = [currentAge, (h) => {
        if (h)
            currentHeight = h;
    }];
console.group('Tuples - užduotys');
{
    console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
    {
        const Zmogus1 = ["Jonas", 5];
        const Zmogus2 = ["Antanas", 19];
        const Zmogus3 = ["Nijole", 45];
        console.log({
            Zmogus1: Zmogus1,
            Zmogus2: Zmogus2,
            Zmogus3: Zmogus3
        });
    }
    console.groupEnd();
    console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
    {
        const Zmogus1 = ["Jonas", "Dobermanas"];
        const Zmogus2 = ["Antanas", "Pinceris"];
        const Zmogus3 = ["Nijole", "Dvarniaska"];
        console.log({
            Zmogus1: Zmogus1,
            Zmogus2: Zmogus2,
            Zmogus3: Zmogus3
        });
    }
    console.groupEnd();
    console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
    {
        const taskas1 = [-1, 14];
        const taskas2 = [5, -4];
        const taskas3 = [7, 19];
        const trikampis1 = [taskas1, taskas2, taskas3];
        console.log({
            trikampis1: trikampis1
        });
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=tuples.js.map