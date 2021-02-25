const assert = require('chai').assert;
const PaymentPackage = require('./solve');

describe('Check PaymentPackage', () => {
    it('constructor', () => {
        const init = new PaymentPackage('Name', 100);

        assert.equal(init.name, 'Name');
        assert.equal(init.value, 100);
        assert.equal(init.VAT, 20);
        assert.equal(init.active, true);
        assert.throw(() => {
            new PaymentPackage('Name')
        }, 'Value must be a non-negative number')

    })
    it('name', () => {
        const init = new PaymentPackage('Name', 100);
        assert.equal(init.name, 'Name');
        assert.throw(() => {
            init.name = 2
        }, 'Name must be a non-empty string')
        assert.throw(() => {
            init.name = ''
        }, 'Name must be a non-empty string')
    })
    it('value', () => {
        const init = new PaymentPackage('Name', 100);
        assert.equal(init.value, 100);
        assert.throw(() => {
            init.value = -1
        }, 'Value must be a non-negative number')
        assert.throw(() => {
            init.value = '2'
        }, 'Value must be a non-negative number')
        assert.throw(() => {
            init.value = undefined
        }, 'Value must be a non-negative number')
        assert.doesNotThrow(()=>{init.value=0})

    })

    it('VAT', function () {
        const init = new PaymentPackage('Name', 100);
        assert.equal(init.VAT, 20);
        assert.throw(() => {
            init.VAT = 'd'
        }, 'VAT must be a non-negative number');
        assert.throw(() => {
            init.VAT = -1
        }, 'VAT must be a non-negative number')
    });

    it('active', function () {
        const init = new PaymentPackage('Name', 100);
        assert.equal(init.active, true);
        assert.throw(() => {
            init.active = 'd'
        }, 'Active status must be a boolean');
    });

    it('toString', function () {
        const init = new PaymentPackage('Name', 100);
        function output(name, value, VAT, active) {
            return [
                `Package: ${name}` + (active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${value}`,
                `- Value (VAT ${VAT}%): ${value * (1 + VAT / 100)}`
            ].join('\n');
        }

        assert.equal(init.toString(),output('Name',100,20,true))
    });
})