function add(a) {
    let sum = 0;
    sum += a;

    function calc(a) {
        sum += a;
        return calc
    }

    calc.toString = () => sum;
    return calc;
}

console.log(add(1)(6)(-3).toString())