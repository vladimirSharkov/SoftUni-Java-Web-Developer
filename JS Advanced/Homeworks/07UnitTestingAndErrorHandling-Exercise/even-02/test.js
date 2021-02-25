const assert = require('chai').assert;
const isOddOrEven = require('./solve');

describe('Check is odd or even',()=>{
    it('Is odd',()=>{
        assert.equal(isOddOrEven('a'),'odd')
        assert.equal(isOddOrEven('aaa'),'odd')
        assert.equal(isOddOrEven('aaa'),'odd')
    })
    it('Is even',()=>{
        assert.equal(isOddOrEven(''),'even')
        assert.equal(isOddOrEven('aa'),'even')
        assert.equal(isOddOrEven('dada'),'even')
    })
    it('Is undefined',()=>{
        assert.isUndefined(isOddOrEven(1))
    })
})