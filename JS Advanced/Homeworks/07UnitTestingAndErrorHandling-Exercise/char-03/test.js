const assert = require('chai').assert;
const lookupChar = require('./solve');

describe('Check char lookup',()=>{
    it('Is undefined',()=>{
        assert.isUndefined(lookupChar(1,1))
        assert.isUndefined(lookupChar(1.2,1))
        assert.isUndefined(lookupChar('saa','1'))
        assert.isUndefined(lookupChar('saa',1.2))
    })
    it('should return incorrect index', function () {
        assert.equal(lookupChar('sa',5),'Incorrect index')
        assert.equal(lookupChar('sa',-5),'Incorrect index')
        assert.equal(lookupChar('',0),'Incorrect index')
    });
    it('should return char', function () {
        assert.equal(lookupChar('s',0),'s')
        assert.equal(lookupChar('sad',2),'d')
    });
})