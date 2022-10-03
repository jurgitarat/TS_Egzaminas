"use strict";
class List {
    constructor(startNode) {
        this.forEach = (callback) => {
            if (this.head == null)
                return;
            let node = this.head;
            callback(node.data);
            while (node.next !== undefined) {
                node = node.next;
                callback(node.data);
            }
        };
        if (startNode !== undefined) {
            this.head = { data: startNode };
            this.tail = { data: startNode };
        }
        else {
            this.head = null;
            this.tail = null;
        }
    }
    addToStart(naujas) {
        if (this.head != null) {
            this.head = { data: naujas, next: this.head };
        }
        else {
            this.head = { data: naujas };
            this.tail = this.head;
        }
    }
    addToEnd(naujas) {
        if (this.tail != null) {
            while (this.tail.next !== undefined) {
                this.tail = this.tail.next;
            }
            this.tail.next = { data: naujas };
            if (this.head && this.head.next === undefined)
                this.head.next = this.tail.next;
            this.tail = this.tail.next;
        }
        else {
            this.head = { data: naujas };
            this.tail = { data: naujas };
        }
    }
}
let pirmasNodas = "Pirmas Node'as";
let antrasNodas = "Antras Node'as";
let treciasNodas = "Trecias Node'as";
const sarasas = new List();
console.log({ tailIsPradziu: sarasas.tail });
sarasas.addToStart(antrasNodas);
console.log({ tailPridejus: sarasas.tail });
console.group('1. Sukurkitę sąrašo mazgo struktūrą ListNode, bet kokiam duomenų tipui');
{
    console.log(pirmasNodas);
    console.log(antrasNodas);
    console.log(treciasNodas);
}
console.groupEnd();
console.group('2. Sukurkite sąrašo klasę List');
{
    console.log({ head: sarasas.head });
    console.log({ tail: sarasas.tail });
}
console.groupEnd();
console.group('3. Sukurkite metodą pridėti elementui į sąrašo priekį.');
{
    console.log({ headIsPradziu: sarasas.head });
    sarasas.addToStart(antrasNodas);
    console.log({ headPridejus: sarasas.head });
}
console.groupEnd();
console.group('4. Sukurkite metodą pridėti elementui į sąrašo galą.');
{
    console.log({ tailIsPradziu: sarasas.tail });
    sarasas.addToStart(treciasNodas);
    sarasas.addToEnd(pirmasNodas);
    sarasas.addToEnd(treciasNodas);
    console.log({ tailPridejus: sarasas.tail });
}
console.groupEnd();
console.group('5. Sukurkite metodą List.forEach klasėje List, kuris vykdytų parametru perduotą funkciją');
{
    sarasas.forEach((str) => console.log(str));
}
console.groupEnd();
//# sourceMappingURL=main.js.map