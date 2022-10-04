/*
  Tuple(rinkinys) - tai masyvas su greižtai nurodytais masyvo elemento tipais ir jų seka.
  Šis tipas neleidžia turėti kitokį kiekį, ar kitokio tipo elementų
*/
type FullnameTuple = [string, string];
type UseNumericStateTuple = [number, (num?: number) => void];

const person1: FullnameTuple = ["Koridas", "Atmazas"];
const person2: FullnameTuple = ["Paklodijus", "Pagalvė"];
const person3: FullnameTuple = ["Višta", "Maumedienė"];

let currentAge: number = 18;
let currentHeight: number = 180;
const age: UseNumericStateTuple = [currentAge, () => currentAge += 1];
const height: UseNumericStateTuple = [currentAge, (h) => {
  if (h) currentHeight = h;
}];

// Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group('Tuples - užduotys');
{
  // ↓↓↓↓ Tipus apraškite čia ↓↓↓↓
type vardasIrAmzius = [string,number];
type seimininkas=string;
type suo=string;
type suoIrSeimininkas=[seimininkas,suo];
type taskas = [number, number];
type trikampis = [taskas,taskas,taskas]

  // ↑↑↑↑ Tipus apraškite čia ↑↑↑↑

  console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
  {
    // sprendimo pavyzdžius spausdinkite čia 
    const Zmogus1:vardasIrAmzius=["Jonas", 5];
    const Zmogus2:vardasIrAmzius=["Antanas",19];
    const Zmogus3:vardasIrAmzius=["Nijole", 45];
    console.log({
      Zmogus1:Zmogus1,
      Zmogus2:Zmogus2,
      Zmogus3:Zmogus3
    }
    );
  }
  console.groupEnd();

  console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
  {
    // sprendimo pavyzdžius spausdinkite čia 

    const Zmogus1:suoIrSeimininkas=["Jonas", "Dobermanas"];
    const Zmogus2:suoIrSeimininkas=["Antanas","Pinceris"];
    const Zmogus3:suoIrSeimininkas=["Nijole", "Dvarniaska"];
    console.log({
      Zmogus1:Zmogus1,
      Zmogus2:Zmogus2,
      Zmogus3:Zmogus3
    }
    );
  }
  console.groupEnd();

  console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
  {
    // sprendimo pavyzdžius spausdinkite čia 
    const taskas1:taskas = [-1, 14];
    const taskas2:taskas = [5, -4];
    const taskas3:taskas = [7, 19];
    const trikampis1:trikampis=[taskas1,taskas2,taskas3];
    console.log( {
      trikampis1:trikampis1
    }
    );
  }
  console.groupEnd();

}
console.groupEnd();