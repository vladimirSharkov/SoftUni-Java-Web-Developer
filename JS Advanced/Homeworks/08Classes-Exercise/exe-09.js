function solve(arr) {
    let result = arr
        .map(line => line.split(' | '))
        .reduce((obj, cars) => {
            let [brand, model, quantity] = cars
            if (!obj[brand]) {
                obj[brand] = {};
            }
            if (!obj[brand][model]) {
                obj[brand][model] = 0;
            }
            obj[brand][model] += Number(quantity);
            return obj
        }, {})

let text=''
    for (const resultKey in result) {
        text += `${resultKey}\n`
        for (let model in result[resultKey]) {
            text+=`###${model} -> ${result[resultKey][model]}\n`
        }

    }
return text

}

console.log(solve(
    ['Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10'
    ]
))