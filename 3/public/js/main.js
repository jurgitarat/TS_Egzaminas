"use strict";
console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
    function paskutinioIndeksas(masyvas) {
        return (masyvas.length - 1);
    }
    const Bandymas1 = ["Jonas", "Petras", "Antanas"];
    const Bandymas2 = [5, 6, 3, 7, 3, 1, 3, 5];
    console.log({
        Bandymas1: paskutinioIndeksas(Bandymas1),
        Bandymas2: paskutinioIndeksas(Bandymas2)
    });
}
console.groupEnd();
console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
    function masyvoIndeksai(masyvas) {
        masyvas.forEach(function callback(value, index) {
            console.log(index);
        });
    }
    const Bandymas1 = ["Jonas", "Petras", "Antanas"];
    const Bandymas2 = [5, 6, 3, 7, 3, 1, 3, 5];
    console.log(Bandymas1);
    masyvoIndeksai(Bandymas1);
    console.log(Bandymas2);
    masyvoIndeksai(Bandymas2);
}
console.groupEnd();
console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
    function masyvoElementai(masyvas) {
        masyvas.forEach(function callback(value) {
            console.log(value);
        });
    }
    const Bandymas1 = ["Jonas", "Petras", "Antanas"];
    const Bandymas2 = [5, 6, 3, 7, 3, 1, 3, 5];
    console.log(Bandymas1);
    masyvoElementai(Bandymas1);
    console.log(Bandymas2);
    masyvoElementai(Bandymas2);
}
console.groupEnd();
console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
{
}
console.groupEnd();
console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
}
console.groupEnd();
console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
}
console.groupEnd();
console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
}
console.groupEnd();
console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
{
}
console.groupEnd();
console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
}
console.groupEnd();
console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
}
console.groupEnd();
console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
}
console.groupEnd();
console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
}
console.groupEnd();
console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
}
console.groupEnd();
console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
}
console.groupEnd();
console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
}
console.groupEnd();
console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
}
console.groupEnd();
//# sourceMappingURL=main.js.map