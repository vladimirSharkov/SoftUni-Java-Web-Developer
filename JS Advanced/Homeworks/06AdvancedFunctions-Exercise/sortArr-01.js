function solve(number, str) {
   return str === 'asc' ? asc(number) : des(number)

    function asc(arr) {
        return arr.sort((a, b) => a - b)
    }
    function des(arr) {
        return arr.sort((a, b) => b - a)
    }
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));