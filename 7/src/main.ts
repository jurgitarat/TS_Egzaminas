/*
  1. Sukurkitę sąrašo mazgo struktūrą ListNode, bet kokiam duomenų tipui

  2. Sukurkite sąrašo klasę List.
    * Klasė turi privačias turėti savybes
      * head -> nuoroda į sąrašo pirmajį mazgą
      * taip -> nuoroda į sąrašo paskutinijė mazgą
    * Sukurkite konstruktorių, jog jis galėtų priimti pirmu parametru perduotą ListNode elementą ir priskirti
    jį savybėms List.head ir List.tail
    Konstruktoriaus ListNode tipo parametras neprivalomas. Neperdavus parametro, List klasės objekto savybės tail ir head turi būti null

  3. Sukurkite metodą pridėti sąrašo elementui į sąrašo priekį.
    Payzdys:
      esamas sąrašas:
        head ↓         ↓ tail
             a -> b -> c
      naujas elementas
        d
      rezultatas
        head ↓              ↓ tail
             d -> a -> b -> c

    Pridedant elementą įsitikintite, kad atnaujinate List.head ir List.tail savybes
    * Po sąrašo List atnaujinimo:
    List.head turi būti pirmasis mazgas(ListNode)
    List.tail turi būti paskutinis mazgas(ListNode)
    * Nepamirškite įvertinti atvejo, kuomet sąrašas List elementų neturi.

  4. Sukurkite metodą pridėti sąrašo elementui į sąrašo galą.
    Payzdys:
      esamas sąrašas:
        head ↓         ↓ tail
             a -> b -> c
      naujas elementas
        d
      rezultatas
        head ↓              ↓ tail
             a -> b -> c -> d

    Pridedant elementą įsitikintite, kad atnaujinate List.head ir List.tail savybes
    * Po sąrašo List atnaujinimo:
    List.head turi būti pirmasis mazgas(ListNode)
    List.tail turi būti paskutinis mazgas(ListNode)
    * Nepamirškite įvertinti atvejo, kuomet sąrašas List elementų neturi.

  5. Sukurkite metodą List.forEach klasėje List, kuris vykdytų parametru perduotą funkciją - callback
  su kiekvieno mazgo reikšme pradedant List.head ir baigiant List.tail
    * ForEachCallback tipas: (value: T) => void
    * List.forEach tipas: ( callback: ForEachCallback) => void)
*/

// ↓↓↓ Tipai ↓↓↓
type listNode={
  data:any,
  next?: listNode
}
type ForEachCallback<T>=(value:T) => void;
// ↑↑↑ Tipai ↑↑↑

// ↓↓↓ Klasės ↓↓↓
class List<Type> {
  head:listNode|null;
  tail:listNode|null;
  constructor(startNode?:Type){
    if (startNode!== undefined){
    this.head={data:startNode};
    this.tail={data:startNode};
    }
    else {
      this.head=null;
      this.tail=null;
    }
  }
  public forEach = (callback: ForEachCallback<Type>):void => {
    if (this.head== null)
      return
    let node = this.head;
    callback(node.data);
    while(node.next!==undefined){
      node =node.next;
      callback(node.data);
    }
  }
  

  public addToStart(naujas:Type){
    if(this.head!=null){
      this.head={data:naujas,next:this.head};
    }
    else{
      this.head={data:naujas};
      this.tail=this.head;
    }
  }
  public addToEnd(naujas:Type){
    if(this.tail!=null){
      while (this.tail.next!==undefined){
        this.tail=this.tail.next;
      }
      this.tail.next={data:naujas};
      if(this.head && this.head.next === undefined)
        this.head.next=this.tail.next;
      this.tail=this.tail.next;
    }
    else{
      this.head={data:naujas};
      this.tail={data:naujas};
    }
  }
}
// ↑↑↑ Klasės ↑↑↑

// ↓↓↓ Kintamuosius skirtus pavyzdžiams saugokite čia ↓↓↓
let pirmasNodas:string= "Pirmas Node'as";
let antrasNodas:string ="Antras Node'as";
let treciasNodas:string ="Trecias Node'as";
const sarasas:List<String> = new List();

console.log({tailIsPradziu:sarasas.tail});
sarasas.addToStart(antrasNodas);
console.log({tailPridejus:sarasas.tail});
// ↑↑↑ Kintamuosius skirtus pavyzdžiam saugokite čia ↑↑↑

console.group('1. Sukurkitę sąrašo mazgo struktūrą ListNode, bet kokiam duomenų tipui');
{

console.log(pirmasNodas);
console.log(antrasNodas);
console.log(treciasNodas);




}
console.groupEnd();

console.group('2. Sukurkite sąrašo klasę List');
{
  
  console.log({head:sarasas.head});
  console.log({tail:sarasas.tail});
}
console.groupEnd();

console.group('3. Sukurkite metodą pridėti elementui į sąrašo priekį.');
{
  console.log({headIsPradziu:sarasas.head});
  sarasas.addToStart(antrasNodas);
  console.log({headPridejus:sarasas.head});
}
console.groupEnd();

console.group('4. Sukurkite metodą pridėti elementui į sąrašo galą.');
{

  console.log({tailIsPradziu:sarasas.tail});
  sarasas.addToStart(treciasNodas);
  sarasas.addToEnd(pirmasNodas);
  sarasas.addToEnd(treciasNodas);
  console.log({tailPridejus:sarasas.tail});
}
console.groupEnd();

console.group('5. Sukurkite metodą List.forEach klasėje List, kuris vykdytų parametru perduotą funkciją');
{
  sarasas.forEach((str) => console.log(str));
}
console.groupEnd();
