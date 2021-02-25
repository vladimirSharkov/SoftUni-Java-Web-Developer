function solve(arr) {


    let container = {}
    let juice = {}
    for (let arrElement of arr) {
        let [name, quantity] = arrElement.split(' => ')


        if (!container[name]) {
            container[name] = Number(quantity);
        } else {
            container[name] += Number(quantity)
        }
        if (container[name] >= 1000) {
            juice[name] = 0
        }
    }


    Object.keys(container).forEach(j => {
        if (juice[j] !== undefined) {
            juice[j] += parseInt(container[j] / 1000);
        }
    })

    return Object.keys(juice).forEach(j => console.log(`${j} => ${juice[j]}`))
}

console.log(solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
))