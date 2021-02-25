class Hex {
    constructor(value) {
        this.value = value
    }

    valueOf() {
        return this.value
    }

    plus(hex) {
        return new Hex(this.value + hex)
    }

    minus(hex) {
        return new Hex(this.value - hex)
    }

    toString() {
        return '0x' + this.value.toString(16).toUpperCase()
    }

    parse(string) {
        return parseInt(string, 16);
    }
}