function solve() {
    let test = {
        ivo:456,
        marto:2456,
        pesho:4444
    }

    return Object.entries(test).map(entry=> `${entry[0]} -> ${Number(entry[1])}`).join('\n')
}

console.log(solve())