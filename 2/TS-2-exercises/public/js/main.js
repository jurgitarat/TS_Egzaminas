"use strict";
console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    const drinks = [
        { name: "lemonade", price: 50 },
        { name: "lime", price: 10 }
    ];
    function sortDrinkByPrice(array) {
        return array.sort((n1, n2) => n1.price - n2.price);
    }
    console.log({
        Original: drinks,
        Sorted: sortDrinkByPrice([...drinks])
    });
}
console.groupEnd();
console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    const addName = (stolen, stolenName, stolenValue) => (Object.assign(Object.assign({}, stolen), { [stolenName]: stolenValue }));
    console.log({
        'addName({}, "Brutus", 300)': addName({}, "Brutus", 300),
        'addName({ piano: 500 }, "Brutus", 400)': addName({ piano: 500 }, "Brutus", 400),
        'addName({ piano: 500, stereo: 300 }, "Caligula", 440)': addName({ piano: 500, stereo: 300 }, "Caligula", 440)
    });
}
console.groupEnd();
//# sourceMappingURL=main.js.map