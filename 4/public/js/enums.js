"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 7] = "Sunday";
})(WeekDays || (WeekDays = {}));
;
var Answer;
(function (Answer) {
    Answer[Answer["No"] = 0] = "No";
    Answer[Answer["Yes"] = 1] = "Yes";
})(Answer || (Answer = {}));
;
var WeekDayNamesLT;
(function (WeekDayNamesLT) {
    WeekDayNamesLT["Monday"] = "pirmadienis";
    WeekDayNamesLT["Tuesday"] = "antradienis";
    WeekDayNamesLT["Wednesday"] = "tre\u010Diadienis";
    WeekDayNamesLT["Thursday"] = "ketvirtadienis";
    WeekDayNamesLT["Friday"] = "penktadienis";
    WeekDayNamesLT["Saturday"] = "\u0161e\u0161tadienis";
    WeekDayNamesLT["Sunday"] = "sekmadienis";
})(WeekDayNamesLT || (WeekDayNamesLT = {}));
;
console.group('Literal types - užduotys');
{
    let Miestai;
    (function (Miestai) {
        Miestai["vilnius"] = "vilnius";
        Miestai["Kaunas"] = "Kaunas";
        Miestai["Klaipeda"] = "klaipeda";
        Miestai["Siauliai"] = "siauliai";
        Miestai["Panevezys"] = "panevezys";
    })(Miestai || (Miestai = {}));
    let Salys;
    (function (Salys) {
        Salys[Salys["Kinija"] = 0] = "Kinija";
        Salys[Salys["Indija"] = 1] = "Indija";
        Salys[Salys["JAV"] = 2] = "JAV";
        Salys[Salys["Indonezija"] = 3] = "Indonezija";
        Salys[Salys["Pakistanas"] = 4] = "Pakistanas";
    })(Salys || (Salys = {}));
    let BVP;
    (function (BVP) {
        BVP[BVP["JAV"] = 1] = "JAV";
        BVP[BVP["Kinija"] = 2] = "Kinija";
        BVP[BVP["Japonija"] = 3] = "Japonija";
        BVP[BVP["Vokietija"] = 4] = "Vokietija";
        BVP[BVP["JungtineKaralyste"] = 5] = "JungtineKaralyste";
    })(BVP || (BVP = {}));
    console.group("1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.");
    {
        const miestas = Miestai.vilnius;
        const kitasMiestas = Miestai.Panevezys;
        console.log({
            miestas: miestas,
            kitasMiestas: kitasMiestas
        });
    }
    console.groupEnd();
    console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
    {
        const salis = Salys.Indonezija;
        const kitaSalis = Salys.Pakistanas;
        console.log({
            salis: salis,
            kitaSalis: kitaSalis
        });
    }
    console.groupEnd();
    console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
    {
        const salis = BVP.Kinija;
        const kitaSalis = BVP.JAV;
        console.log({
            salis: salis,
            kitaSalis: kitaSalis
        });
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=enums.js.map