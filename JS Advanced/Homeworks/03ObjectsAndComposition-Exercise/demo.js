function solve3(input) {
    function getEngine(power) {
        let engine = [
            {power: 90, volume: 1800},
            {power: 120, volume: 2400},
            {power: 200, volume: 3500}
        ]
        return engine.find(el => el.power >= power)
    }

    function getCarriage(carriage, color) {
        return {
            type: carriage,
            color
        }
    }

    function getWheels(wheels) {
        let result = 0
        if (wheels % 2 === 0) {
            result = wheels - 1
        } else {
            result = wheels
        }
        return Array(4).fill(result, 0, 4)
    }

    return {
        model: input.model,
        engine: getEngine(input.power),
        carriage: getCarriage(input.carriage, input.color),
        wheels: getWheels(input.wheelsize)
    }
}

console.log(solve3(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
))


function solve4(input) {

    let result = [];

    while (input.length) {
        let hero = input.shift();
        let [name, level, itemsStr] = hero.split(' / ');
        if (!itemsStr) {
            itemsStr = []
        } else {
            itemsStr = itemsStr.split(', ')
        }
        let date = {
            name, level: Number(level), items: itemsStr
        }
        result.push(date)
    }
    return JSON.stringify(result)
}

console.log(solve4(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
))

function solve6(input) {
    let result = {};

    while (input.length) {
        let product = input.shift();
        let [name, price] = product.split(' : ');
        let letter = name[0];
        if (!result[letter]) {
            result[letter] = [];
        }
        result[letter].push({name, price: Number(price)})
        result[letter].sort((a, b) => a.name.localeCompare(b.name))
    }
    let dic = [];
    Object.entries(result).sort(((a, b) => a[0].localeCompare(b[0]))).forEach(entry=>{
        let values = entry[1]
            .map(product => `  ${product.name}: ${product.price}`)
            .join('\n');

        let str = `${entry[0]}\n${values}`
        dic.push(str)
    })

    return dic.join('\n');

}

console.log(solve6([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
))