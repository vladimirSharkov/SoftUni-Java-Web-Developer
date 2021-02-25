function solve() {

    let result = [];
    let count = {};

    [...arguments].forEach(argument => {
        let type = typeof argument;

        result.push({type, value: argument});

        if (!count[type]) {
            count[type] = 0;
        }
        count[type]++;
    })

    result.forEach(r=>console.log(`${r.type}: ${r.value}`))

    let sort = Object.entries(count).sort((a,b)=>b[1]-a[1])

    sort.forEach(el=>console.log(`${el[0]} = ${el[1]}`))
}

(solve('cat', 42, function () {
    console.log('Hello world!');
}));