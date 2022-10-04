console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{

    type drink = {
        name: string,
        price: number
      };

    const drinks:drink[] = [
        {name: "lemonade", price: 50},
        {name: "lime", price: 10}
      ]
     function  sortDrinkByPrice(array:drink[]):drink[]{

        return  array.sort((n1, n2) => n1.price - n2.price);
  
      }
console.log({
    Original: drinks,
    Sorted:sortDrinkByPrice([...drinks])
  });
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{

    type stolenItems = {
        [name:string]: number,
      };
      const addName = (stolen:stolenItems, stolenName:string, stolenValue:number):stolenItems =>({
        ...stolen,
        [stolenName]: stolenValue
      });

      console.log({
        'addName({}, "Brutus", 300)':addName({}, "Brutus", 300),
        'addName({ piano: 500 }, "Brutus", 400)':addName({ piano: 500 }, "Brutus", 400),
        'addName({ piano: 500, stereo: 300 }, "Caligula", 440)':addName({ piano: 500, stereo: 300 }, "Caligula", 440)
      });


}
console.groupEnd();

