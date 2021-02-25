const assert = require('chai').assert;
const mathEnforcer = require('./solve');

describe('Check math enforcer',()=>{
   describe('addFive',function () {
       it('should return correct result', function () {
           assert.equal(mathEnforcer.addFive(5),10);
           assert.equal(mathEnforcer.addFive(-5),0);
       });
       it('should return undefined', function () {
           assert.isUndefined(mathEnforcer.addFive('sd'));
       });
   })
    describe('subtractTen',()=>{
        it('should return correct result', function () {
            assert.equal(mathEnforcer.subtractTen(20),10);
            assert.equal(mathEnforcer.subtractTen(10),0);
            assert.equal(mathEnforcer.subtractTen(-10),-20);
        });
        it('should return undefined',()=>{
            assert.isUndefined(mathEnforcer.subtractTen('dd'));
        })
    })
    describe('sum',()=>{
        it('should return correct result', function () {
            assert.equal(mathEnforcer.sum(1,2),3)
            assert.equal(mathEnforcer.sum(-1,2),1)
        })
        it('should return undefined',function () {
            assert.isUndefined(mathEnforcer.sum(1,'1'));
            assert.isUndefined(mathEnforcer.sum('1','1'));
            assert.isUndefined(mathEnforcer.sum('1',1));
            assert.isUndefined(mathEnforcer.sum('',1));
        })
    })
})