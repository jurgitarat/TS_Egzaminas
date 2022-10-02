"use strict";
const someNumber = 17;
const title = "Grace";
const formAddUser = document.querySelector('#form-add-user');
formAddUser.onsubmit = (e) => {
    e.preventDefault();
    console.log('Ateityje pridėsiu vartotoją');
};
console.group('Assertions - užduotys');
{
    const button = document.createElement("button");
    const divElement = document.createElement("div");
    console.group('1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!"');
    {
        button.textContent = "Paspauskite mygtuka";
        const printTextOnClick = () => console.log('papausta!');
        button.addEventListener('click', printTextOnClick);
        document.body.appendChild(button);
    }
    console.groupEnd();
    console.group('2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas');
    {
        document.body.appendChild(divElement);
        const addSquareonClick = () => divElement.innerText = divElement.innerText + "■";
        button.addEventListener('click', addSquareonClick);
    }
    console.groupEnd();
    console.group('3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje');
    {
        const pElement = document.createElement("p");
        pElement.innerText = "0";
        document.body.appendChild(pElement);
        const countSquares = () => pElement.innerText = (parseInt(pElement.innerText) + 1) + "";
        button.addEventListener('click', countSquares);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=assertions.js.map