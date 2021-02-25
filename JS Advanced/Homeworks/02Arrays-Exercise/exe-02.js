function solve(arrayStr, delimiter) {
    let newArray = '';
    arrayStr.forEach(str => {
        str += delimiter;
        newArray += str;
    })
    return newArray.slice(0, newArray.length - 1)

}

console.log(solve(['One',
        'Two',
        'Three',
        'Four',
        'Five'],
    '-'
));

function solve2(array, steep) {
    let newArray = [];
    for (let i = 0; i < array.length; i += steep) {
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(solve2(['5',
        '20',
        '31',
        '4',
        '20'],
    2
));

function solve3(array) {
    let numArray = [];
    let currentElement = 1;
    array.forEach(str => {
        if (str === 'add') {
            numArray.push(currentElement);
        } else {
            numArray.pop();
        }
        currentElement++
    })
    if (numArray.length === 0) {
        return 'Empty'
    }

    return numArray.join('\n');
}

console.log(solve3(['add',
    'add',
    'remove',
    'add',
    'add']
));
console.log(solve3(['add',
    'add',
    'add',
    'add']
));

function solve4(array, num) {
    for (let i = 0; i < num; i++) {

        let pop = array.pop();
        array.unshift(pop);
    }
    return array.join(' ');
}

console.log(solve4(['1',
        '2',
        '3',
        '4'],
    2
));

function solve5(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            let index = i + 1;
            array.splice(index, 1);
            i--;
        }
    }
    return array;
}

console.log(solve5([20,
    3,
    2,
    15,
    6,
    1]
))

function solve6(array) {
    array.sort();
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1}.${array[i]}`)
    }

}

console.log(solve6(["John", "Bob", "Christina", "Ema"]));

function solve7(array) {
    let sortingArray = [];
    array.sort((a, b) => {
        return b - a
    });
    while (array.length > 0) {
        let firstElement = array.shift();
        sortingArray.push(firstElement);
        let lastElement = array.pop();
        sortingArray.push(lastElement);
    }
    return sortingArray;
}

console.log(solve7([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));


function solve8(array) {
    array.sort((a, b) => {
        if (a.length - b.length === 0) {
            return a.localeCompare(b)
        } else {

            return a.length - b.length
        }
    })
    return array.join('\n')
}

console.log(solve8(['test',
    'Deny',
    'omen',
    'Default']
))

function solve9(array) {
    let arrayCol = [];
    let arrayRow = [];

    let testCol = 0;
    let testRow = 0;

    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array[row].length; col++) {

            let sumCol = Number(array[col][row]);
            let sumRow = array[row][col];
            testCol += sumCol;
            testRow += sumRow;

        }
        arrayCol.push(testCol);
        arrayRow.push(testRow)
        testCol = 0;
        testRow = 0;
    }

    return arrayCol.concat(arrayRow).every((el,ind,arr)=>el===el[ind+1]);
}

console.log(solve9(
    [[11, 32, 45],
        [21, 0, 1],
        [21, 1, 1]]

))



































