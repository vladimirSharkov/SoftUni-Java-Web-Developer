function solve(fruit, weight, money) {
    weight = weight / 1000
    let price = money * weight;
    console.log(`I need $${price.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80);


function solve2(number1, number2) {
    let t;
    while (number2) {
        t = number2;
        number2 = number1 % number2;
        number1 = t;
    }
    return t;
}

solve2(15, 5)

function solve3(number) {

    let isSame = true;
    let sum = 0;
    let str = number.toString();
    for (let i = 0; i < str.length; i++) {
        let next = str[i + 1];
        if (str[i] !== next && next !== undefined) {
            isSame = false;
        }
        sum += Number(str[i]);
    }
    return `${isSame}\n${sum}`
}

console.log(solve3(1234));

function solve4(steps, footprintMeters, speedKmH) {

    const speed = speedKmH * 1000 / 3600
    const distance = steps * footprintMeters;
    const timeInSec = distance / speed;

    const restInSec = Math.floor(distance / 500) * 60;
    const totalTimeInSec = timeInSec + restInSec;

    const hours = Math.floor(totalTimeInSec / 3600).toString().padStart(2,'0');
    const minutes = Math.floor(totalTimeInSec / 60).toString().padStart(2,'0');
    const seconds = Math.round(totalTimeInSec % 60).toString().padStart(2,'0')


    return `${hours}:${minutes}:${seconds}`
}

console.log(solve4(2564, 0.70, 5.5));

function solve5(speed, place) {
    switch (place) {
        case 'residential':
            radar(20);
            break;
        case 'city':
            radar(50);
            break;
        case'interstate':
            radar(90);
            break;
        case'motorway':
            radar(130);
            break;
    }

    function radar(limit) {
        if (speed > limit) {
            let difference = speed - limit;
            let status;
            if (difference <= 20) {
                status = 'speeding';
            } else if (difference <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`)
        } else {
            console.log(`Driving ${speed} km/h in a ${limit} zone`)
        }
    }
}

solve5(200, 'motorway')

function solve6(number, operation1, operation2, operation3, operation4, operation5) {

    let operationArray = [];
    operationArray.push(operation1, operation2, operation3, operation4, operation5);
    operationArray.forEach(operation => {
        switch (operation) {
            case'chop':
                number = number / 2;
                console.log(number)
                break;
            case'dice':
                number = Math.sqrt(number);
                console.log(number);
                break;
            case'spice':
                number += 1;
                console.log(number);
                break
            case'bake':
                number *= 3;
                console.log(number);
                break;
            case'fillet':
                number *= 0.8;
                console.log(number);
                break;
        }
    })

}

solve6('32', 'chop', 'chop', 'chop', 'chop', 'chop');

function solve7(x1, y1, x2, y2) {

    console.log(`{${x1}, ${y1}} to {0, 0} ${checkValidity(isValid(x1, y1, 0, 0))}`);
    console.log(`{${x2}, ${y2}} to {0, 0} ${checkValidity(isValid(x2, y2, 0, 0))}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} ${checkValidity(isValid(x1, y1, x2, y2))}`);

    function isValid(x1, y1, x2, y2) {
        let number = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return Number.isInteger(number);
    }

    function checkValidity(validity) {
        return validity ? 'is valid' : 'is invalid'
    }
}

solve7(3, 0, 0, 4);


function f() {

}