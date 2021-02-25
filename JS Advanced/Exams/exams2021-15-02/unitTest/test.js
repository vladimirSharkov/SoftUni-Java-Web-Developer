const dealership = require('./solve');
const assert = require('chai').assert;

describe('test',()=>{
    it('newCarCost', function () {
        assert.equal(dealership.newCarCost('a',1),1);
        assert.equal(dealership.newCarCost('Audi A4 B8',30000),15000);
    });
    it('carEquipment', function () {

        assert.deepEqual(dealership.carEquipment(['a'],[0]),['a'])
    });
    it('euroCategory', function () {
        assert.equal(dealership.euroCategory(5),'We have added 5% discount to the final price: 14250.')
    });
    it('euroCategory', function () {
        assert.equal(dealership.euroCategory(4),'We have added 5% discount to the final price: 14250.')
    });
    it('euroCategory', function () {
        assert.equal(dealership.euroCategory(2),'Your euro category is low, so there is no discount from the final price!')
    });
})