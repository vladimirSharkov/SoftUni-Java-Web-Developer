function solve(array) {

    const obj = {};


    for (let i = 0; i < array.length; i += 2) {

        let food = array[i];
        let cal = Number(array[i + 1]);
        obj[food] = cal;
    }

    return obj;
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))

function solve2(obj) {

    if (obj.dizziness === false) {
        return obj;
    } else {

        obj.levelOfHydrated = obj.levelOfHydrated + 0.1 * obj.weight * obj.experience;
        obj.dizziness = false;
    }
    return obj;
}

console.log(solve2({
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true
    }
))


function solve3(obj) {
    function getEngine(power) {
        const engine = [
            {power: 90, volume: 1800},
            {power: 120, volume: 2400},
            {power: 200, volume: 3500}
        ]

        return engine.find(el => el.power >= power);
    }

    function getCarriage(color, carriage) {
        return {
            type: carriage,
            color: color
        }
    }

    function getWheelsize(wheelsize) {
        let wheel = Math.floor(wheelsize) % 2 === 0
            ? Math.floor(wheelsize) - 1
            : Math.floor(wheelsize)

        return Array(4).fill(wheel, 0, 4);

    }

    return {
        model: obj.model,
        engine: getEngine(obj.power),
        carriage: getCarriage(obj.color, obj.carriage),
        wheelsize: getWheelsize(obj.wheelsize)
    };
}

console.log(solve3({
        model: 'Brichka',
        power: 65,
        color: 'white',
        carriage: 'hatchback',
        wheelsize: 16
    }
))
console.log(solve3({
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
        let [name, level, items] = hero.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        result.push({name, level, items})
    }
    return JSON.stringify(result)
}

console.log(solve4(
    ['Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara']
))


function solve5(input) {
    let log = {};
    while (input.length) {
        let sale = input.shift();
        let [town, product, price] = sale.split(' | ');

        if (!log[product]) {
            log[product] = {town: town, price: Number(price)}
        } else {

            log[product] = log[product].price <= Number(price) ? log[product] : {town: town, price: Number(price)};
        }
    }

    let result = [];
    for (const product in log) {
        result.push(`${product} -> ${log[product].price} (${log[product].town})`)
    }

    return result.join('\n');

}

console.log(solve5(
    ['Sofia City | Audi | 100000',
        ' Sofia City | BMW | 100000',
        'Sofia City | Mitsubishi | 10000',
        'Sofia City | Mercedes | 10000',
        ' Sofia City | NoOffenseToCarLovers | 0',
        ' Mexico City | Audi | 1000',
        ' Mexico City | BMW | 99999',
        'New York City | Mitsubishi | 10000',
        ' New York City | Mitsubishi | 1000',
        'Mexico City | Audi | 100000',
        ' Washington City | Mercedes | 1000'

    ]
))

function solve6(input) {

    let dictionary = {};
    while (input.length) {
        let [name, price] = input.shift().split(' : ')
        let letter = name[0].toUpperCase();
        if (!dictionary[letter]) {
            dictionary[letter] = [];
        }
        dictionary[letter].push({name, price: Number(price)})
        dictionary[letter].sort((a, b) => (a.name).localeCompare(b.name))
    }

    let result = [];
    // for (const letter in dictionary) {
    //   let values = dictionary[letter].map(entry=>`  ${entry.name}: ${entry.price}`)
    //     let str = `${letter}\n`+ `${values.join('\n')}`
    //     result.push(str)
    //
    // }
    // return result.join('\n')
    //sort((a,b)=>a.name.localeCompare(b.name))

    Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(entry => {
            let values = entry[1]
                .map(product => `  ${product.name}: ${product.price}`)
                .join('\n');

            let str = `${entry[0]}\n${values}`
            result.push(str)
        });
    return result.join('\n')
}

console.log(solve6(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
))


function solve7(input) {

    let [columns, ...table] = input.map(splitLine);

    function convertIfNum(entry) {
        return isNaN(entry) ? entry : Number(Number(entry).toFixed(2))
    }

    function splitLine(input) {
        return input.split('|').filter(x => x).map(x => x.trim()).map(convertIfNum)
    }


    return JSON.stringify(table.map(entry => {
        return columns.reduce((acc, curr, index) => {
            acc[curr] = entry[index]
            return acc
        }, {})

    }))
}

console.log(solve7([
        '| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |'
    ]
))

function rectangle(width, height, color) {
    function capitalize(word) {
        return word[0].toLocaleUpperCase()+word.slice(1)
    }

    function calcArea() {
        return this.width*this.height;
    }

    return {
        width,
        height,
        color: capitalize(color),
        calcArea
    }
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

