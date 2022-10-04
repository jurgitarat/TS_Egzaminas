/* eslint-disable no-empty */
/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

/*
  Užduočių atlikimo eiga:
  * Pirmiausiai perskaitykite visą užduotį:

  * Klauskite dėstytojo užduoties paaiškinimo, jeigu užduotis nėra aiški.

  * Galvoje susidarytkite sprendimo planą:
    * Kaip atliksiu užduotį? Galbūt verta pasibraižyti sprendimo idėją ant lapelio?
    * Kokių tipų reikės? Parametrų tipai, rezultatų tipai, funkcijų tipai.
    * Kaip aiškiai ir tvarkingai pateiksiu rezultatus?

  * Bandykite atlikti užduotį:
    * Pavyko:
      * Atspausdinkite rezultatus ir/arba veikimo pavyzdžius
      * Pabandykite patobulinti savo kodą:
        * pabandykite aiškiau aprašyti kintamųjų/tipų pavadinimus
        * sužiūrėkite ar tikrai naudojate vieningą sintaksę
      * Palyginkite savo sprendimą su užuočių atsakymų failu.
      * Suformuokite klausimus dėstytojui, pagal sprendimų skirtumus
    * Nepavyko:
      * pažiūrėkite atsakymų failą ir PO VIENĄ EILUTĘ nusirašykite sprendimą
      * rašant kiekvieną eilutę smulkmeniškai suformuokite klausimus.

    * Spręskite kitus uždavinius, o kai dėstytojas aiškins užduoties sprendimą, klausykitės
      * Po dėstytojo sprendimo ir aiškinimo užduokite klausimus, kurių vis dar nesuprantate.

  Patarimai:
    * Paspauskite komandą: ALT + Z - tai padės lengviau skaityti užduočių tekstą
    * Nežiūrėkite į atsakymų failus anksčiau laiko.
      jūsų tikslas lavinti inžinerinį mąstymą, o ne atlikti užduotis.
    * Nesedėkite prie kompiuterio ilgiau nei 1 val iš eilės, darykite pertraukas po 10 min
    * Klauskite visko ko nesuprantate. Neklausdami eikvojat savo laiką, kurį šie kursai taupo.
      Gerbiat savo laiką - gerbiat save.
    * Kodo tvarka ir aiškumas tiek pat svarbūs kiek funkcionalumas. Išmoksite tai dabar,
      arba kuomet negausite darbo dėl netvarkingo kodo.
    * Atlikę užduotį, užduokite sau klausimą: "Ar tai geriausia ką galėjau?"
    * Įsigilinimas jūsų žinias iš supratimo perkelia į suvokimą. Tik suvokiant dalykus, galite
      žinias pritaikyti kūrybiškai. Iš to seka, kad užduoties atlikimo kokybė >>> užduočių kiekis
    * Užduočių rezultatų pateikimas tike pat svarbus, kiek sprendimas.
*/
type Person = {
  readonly name: string,
  readonly surname: string,
  readonly sex: 'male' | 'female',
  age: number,
  income?: number,
  married?: boolean,
  hasCar?: boolean,
};

const people: Person[] = [
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

/*
  Šių užduočių tikslas ne tik išspręsti užduotis, bet išmokti kurti tipus pagal jau esančius tipus
  Pirmos 2 užduotys pateikiamos kaip pavyzdžiai kaip turėtų būt sprendžiami uždaviniai:
    * Aprašome tipus
    * Aprašome funkcijas
    * (jeigu reikia aprašome naujus kintamuosius reikalingus sprendimui)
    * Atliekame užduoties sprendimą
    * Spausdiname sprendimo rezultatus

  Visas funkcijas ir kintamuosius reikia aprašyti tipais (net jei to ir nereikalauja TS compiler'is)

*/
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
  // Tipai:
  type Identity = {
    name: Person['name'],
    surname: Person['surname'],
  };

  // Funkcijos:
  const personToIdentity = ({ name, surname }: Person): Identity => ({ name, surname });

  // Sprendimas:
  const identities: Identity[] = people.map(personToIdentity);

  // Spausdinimas:
  console.table(people);
  console.table(identities);
}
console.groupEnd();

console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
  // type TaskProps = {
  //   married: NonNullable<Person["married"]>,
  //   hasCar: NonNullable<Person["hasCar"]>,
  // }

  type TaskProps = Pick<Required<Person>, 'hasCar' | 'married'>;

  const selectTaskProps = ({ married, hasCar }: Person): TaskProps => ({
    married: Boolean(married),
    hasCar: Boolean(hasCar),
  });

  const result: TaskProps[] = people.map(selectTaskProps);

  console.table(people);
  console.table(result);
}
console.groupEnd();

console.groupCollapsed('3. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  {
    // Tipai:
    type Identity = {
      name: Person['name'],
      surname: Person['surname'],
      sex:Person['sex']
    };
  
    // Funkcijos:
    const personToIdentity = ({ name, surname, sex }: Person): Identity => ({ name, surname,sex });
  
    // Sprendimas:
    const sexIdentities: Identity[] = people.map(personToIdentity);
  
    // Spausdinimas:
    console.table(people);
    console.table(sexIdentities);
  }
}
console.groupEnd();

console.groupCollapsed('4. Suformuokite visų vyrų masyvą');
{
    // Funkcijos:
    const dieduFiltras = (Zmogus: Person): Boolean => (Zmogus.sex=='male');
    // Sprendimas:
    const Vyrai: Person[] = people.filter(dieduFiltras);
  
    // Spausdinimas:
    console.table(people);
    console.table(Vyrai);

}
console.groupEnd();

console.groupCollapsed('5. Suformuokite visų moterų masyvą');
{
  {
    // Funkcijos:
    const bobuFiltras = (Zmogus: Person): Boolean => (Zmogus.sex!='male');
    // Sprendimas:
    const Bobos: Person[] = people.filter(bobuFiltras);
  
    // Spausdinimas:
    console.table(people);
    console.table(Bobos);

}
}
console.groupEnd();

console.groupCollapsed('6. Suformuokite objektų masyvą su žmonių vardais ir pavardėm, kurie turi mašinas');
{
  // Tipai:
  type Identity = {
    name: Person['name'],
    surname: Person['surname'],
  };

  // Funkcijos:
  const Filtras = (Zmogus: Person): Boolean => (Zmogus.hasCar==true);
  const personToIdentity = ({ name, surname }: Person): Identity => ({ name, surname });


  // Sprendimas:

  const identities: Identity[] = people.filter(Filtras).map(personToIdentity);

  // Spausdinimas:
  console.table(people);
  console.table(identities);
}

console.groupEnd();

console.groupCollapsed('7. Suformuokite objektų masyvą iš žmonių kurie yra susituokę');
{

  // Funkcijos:
  const Filtras = (Zmogus: Person): Boolean => (Zmogus.married==true);


  // Sprendimas:

  const identities: Person[] = people.filter(Filtras);

  // Spausdinimas:
  console.table(people);
  console.table(identities);
}

console.groupEnd();

console.groupCollapsed('8. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
/*
  {
    male: 7,
    female: 8
  }
*/
{
  // Tipai:
  type Average = {
    male: number,
    female: number,
  };

  // Funkcijos:
  const VyruFiltras = (Zmogus: Person): Boolean => (Zmogus.sex=='male'&& Zmogus.hasCar==true);
  const MoteruFiltras = (Zmogus: Person): Boolean => (Zmogus.sex=='female'&& Zmogus.hasCar==true);
 
  

  // Sprendimas:

  const averages:Average = {
    male:people.filter(VyruFiltras).length,
    female:people.filter(MoteruFiltras).length
  }

  
  // Spausdinimas:
  console.table(people);
  console.table(averages);
}
console.groupEnd();

console.groupCollapsed('9. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  // Tipai:
  type Identity = {
    readonly name: Person['name'],
    readonly surname: Person['surname'],
    readonly sex: Person['sex'],
    age: Person['age'],
    salary?: Person['income']|undefined,
    married?: Person['married']|undefined,
    hasCar?: Person['hasCar']|undefined,
  };

  // Funkcijos:
  //const personToIdentity = ({ name, surname, sex, age, income , married,hasCar  }: Person): Identity => ({ name, surname, sex, age, income, married, hasCar });
  function personToIdentity({name, surname, sex, age, income , married,hasCar}:Person):Identity { 
    let rObj:Identity = { name: name, surname: surname, sex:sex,age:age,salary:income,married:married,hasCar:hasCar  };
    return rObj;
}
  // Sprendimas:
  const identities: Identity[] = people.map(personToIdentity);

  // Spausdinimas:
  console.table(people);
  console.table(identities);

}
console.groupEnd();

console.groupCollapsed('10. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
  type Identity = {
    age: number,
    income?: number|undefined,
    married?: boolean|undefined,
    hasCar?: boolean|undefined,
  };

  // Funkcijos:
  const personToIdentity = ({age, income , married,hasCar  }: Person): Identity => ({age, income, married, hasCar });
  // Sprendimas:
  const identities: Identity[] = people.map(personToIdentity);

  // Spausdinimas:
  console.table(people);
  console.table(identities);

}
console.groupEnd();

console.groupCollapsed('11. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  // Tipai:
  type Identity = {
    readonly fullname: Person['surname'],
    readonly sex: Person['sex'],
    age: Person['age'],
    income?: Person['income']|undefined,
    married?: Person['married']|undefined,
    hasCar?: Person['hasCar']|undefined,
  };

  // Funkcijos:
  //const personToIdentity = ({ name, surname, sex, age, income , married,hasCar  }: Person): Identity => ({ name, surname, sex, age, income, married, hasCar });
  function personToIdentity({name, surname, sex, age, income , married,hasCar}:Person):Identity { 
    let rObj:Identity = { fullname: name + " " + surname, sex:sex,age:age,income,married:married,hasCar:hasCar  };
    return rObj;
}
  // Sprendimas:
  const identities: Identity[] = people.map(personToIdentity);

  // Spausdinimas:
  console.table(people);
  console.table(identities);

}
console.groupEnd();
