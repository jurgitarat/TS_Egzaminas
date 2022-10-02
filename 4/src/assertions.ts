/*
  Assertion(Teigimas) - tai papildoma direktyva tiksliau aprašyti tipui, kuomet programuotojui žinoma daugiau 
  informacijos nei gali žinoti TypeScript transpiliatorius.

  Įmanoma 'teigti' tik tuos tipus, kurie priklauso potencialių tipų aibei
*/

type PossibleType = string | number;

const someNumber: PossibleType = 17 as number;
const title: PossibleType = "Grace" as string;

// Šiuo atveju 'teigiame' kad rastas elementas bus būtent form'os elementas.
const formAddUser: HTMLFormElement = document.querySelector('#form-add-user') as HTMLFormElement;
formAddUser.onsubmit = (e) => {
  e.preventDefault();
  console.log('Ateityje pridėsiu vartotoją');
};

// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Assertions - užduotys');
{
  // ↓↓↓↓ Tipus ir užduotims bendrus kintamuosius apraškite čia ↓↓↓↓
    const button:HTMLElement = document.createElement("button");
    const divElement:HTMLElement = document.createElement("div");
    type EventHandler = (e: MouseEvent) => void;
  // ↑↑↑↑ Tipus ir užduotims bendrus kintamuosius apraškite čia ↑↑↑↑

  console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia 
    button.textContent="Paspauskite mygtuka";
    const printTextOnClick: EventHandler = () => console.log('papausta!');
    button.addEventListener('click',printTextOnClick);
    document.body.appendChild(button);
    
  }
  console.groupEnd();

  console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia 
    
    document.body.appendChild(divElement);
    const addSquareonClick: EventHandler = () => divElement.innerText = divElement.innerText+"■";
    button.addEventListener('click',addSquareonClick);
  }
  console.groupEnd();

  console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
  {
    // sprendimą|sprendimo pavyzdžius spausdinkite čia 
    const pElement:HTMLElement=document.createElement("p");
    pElement.innerText="0";
    document.body.appendChild(pElement);
    const countSquares: EventHandler = () => pElement.innerText = (parseInt(pElement.innerText)+1)+"";
    button.addEventListener('click',countSquares);
  }
  console.groupEnd();

}
console.groupEnd();