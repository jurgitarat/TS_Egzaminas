
console.group('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function paskutinioIndeksas(masyvas:any[]):number{
    return (masyvas.length-1)
  }
  const Bandymas1 = ["Jonas", "Petras", "Antanas"];
  const Bandymas2 = [5,6,3,7,3,1,3,5];
  console.log({
    Bandymas1:paskutinioIndeksas(Bandymas1),
    Bandymas2:paskutinioIndeksas(Bandymas2)
  })

}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function masyvoIndeksai(masyvas:any[]):void{
    for (let n = 0; n<masyvas.length;n++)
      console.log(n);
    
      
  }
  const Bandymas1 = ["Jonas", "Petras", "Antanas"];
  const Bandymas2 = [5,6,3,7,3,1,3,5];
  console.log(Bandymas1);
  masyvoIndeksai(Bandymas1);
  console.log(Bandymas2);
  masyvoIndeksai(Bandymas2);
}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function masyvoElementai(masyvas:any[]):void{
    masyvas.forEach(function callback(value) {
      console.log(value);
    }
      );
  }
  const Bandymas1 = ["Jonas", "Petras", "Antanas"];
  const Bandymas2 = [5,6,3,7,3,1,3,5];
  console.log(Bandymas1);
  masyvoElementai(Bandymas1);
  console.log(Bandymas2);
  masyvoElementai(Bandymas2);

}
console.groupEnd();

console.group('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function masyvoElementai(masyvas:any[]):void{
    masyvas.forEach(function callback(value, index) {
      console.log(`[${index}] => ${value}`);
    }
      );
  }
  const Bandymas1 = ["Jonas", "Petras", "Antanas"];
  const Bandymas2 = [5,6,3,7,3,1,3,5];
  console.log(Bandymas1);
  masyvoElementai(Bandymas1);
  console.log(Bandymas2);
  masyvoElementai(Bandymas2);




}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis

  function masyvoElementaiAtbulai(masyvas:any[]):void{
    for (let n = masyvas.length-1; n>=0;n--)
      console.log(masyvas[n]);

   
  }
  const Bandymas1 = ["Jonas", "Petras", "Antanas"];
  const Bandymas2 = [5,6,3,7,3,1,3,5];
  console.log(Bandymas1);
  masyvoElementaiAtbulai(Bandymas1);
  console.log(Bandymas2);
  masyvoElementaiAtbulai(Bandymas2);





}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function masyvoIndeksaiEiluteje(masyvas:any[]):void{
    let sarasas :string="";
    for (let n = 0; n<masyvas.length;n++)
      sarasas=sarasas+n+" ";
    
    console.log(sarasas);   
}
const Bandymas1 = ["Jonas", "Petras", "Antanas"];
const Bandymas2 = [5,6,3,7,3,1,3,5];
console.log(Bandymas1);
masyvoIndeksaiEiluteje(Bandymas1);
console.log(Bandymas2);
masyvoIndeksaiEiluteje(Bandymas2);



}
console.groupEnd();

console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function masyvoElementaiEiluteje(masyvas:any[]):void{
    console.log(masyvas.join(" "));   
}
const Bandymas1 = ["Jonas", "Petras", "Antanas"];
const Bandymas2 = [5,6,3,7,3,1,3,5];
console.log(Bandymas1);
masyvoElementaiEiluteje(Bandymas1);
console.log(Bandymas2);
masyvoElementaiEiluteje(Bandymas2);



}
console.groupEnd();

console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17, [1]=>8, [2]=>88 ..
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function masyvasEiluteje(masyvas:any[]):void{
    let sarasas :string="";
    for (let n = 0; n<masyvas.length;n++)
      sarasas=sarasas+"["+n+"]=>"+masyvas[n]+", ";
    
    console.log(sarasas);   
}
const Bandymas1 = ["Jonas", "Petras", "Antanas"];
const Bandymas2 = [5,6,3,7,3,1,3,5];
console.log(Bandymas1);
masyvasEiluteje(Bandymas1);
console.log(Bandymas2);
masyvasEiluteje(Bandymas2);






}
console.groupEnd();

console.group('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis


  function masyvasEiluteje(masyvas:number[]):number[]{
    const padidintasMasyvas:number[]=[...masyvas];
    for (let n = 0; n<padidintasMasyvas.length;n++)
    padidintasMasyvas[n]=padidintasMasyvas[n]*2;
    
    return padidintasMasyvas
}
const Bandymas2 = [5,6,3,7,3,1,3,5];
console.log({
  PradinisMasyvas: Bandymas2,
  PadidintasMasyvas: masyvasEiluteje(Bandymas2)})
}
console.groupEnd();

console.group('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
  function masyvasEiluteje(masyvas:number[]):number[]{
    const padidintasMasyvas:number[]=[...masyvas];
    for (let n = 0; n<padidintasMasyvas.length;n++)
    padidintasMasyvas[n]=Math.pow(padidintasMasyvas[n],2);
    
    return padidintasMasyvas
}
const Bandymas2 = [5,6,3,7,3,1,3,5];
console.log({
  PradinisMasyvas: Bandymas2,
  KvadratinisMasyvas: masyvasEiluteje(Bandymas2)})
}



console.groupEnd();

console.group('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis

  function masyvasEiluteje(masyvas:number[]):number[]{
    const padidintasMasyvas:number[]=[...masyvas];
    for (let n = 0; n<padidintasMasyvas.length;n++)
    padidintasMasyvas[n]=padidintasMasyvas[n]*n;
    
    return padidintasMasyvas
}
const Bandymas2 = [5,6,3,7,3,1,3,5];
console.log({
  PradinisMasyvas: Bandymas2,
  PadidintasMasyvas: masyvasEiluteje(Bandymas2)})
}





}
console.groupEnd();

console.group('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();

console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();
