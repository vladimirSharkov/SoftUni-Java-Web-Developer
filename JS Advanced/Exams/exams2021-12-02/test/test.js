const assert = require('chai').assert;
const pizzUni = require('./sorse');

describe('Test pizzUni', () => {
    it('makeAnOrder', function () {
        let pizza = {orderedPizza: 'pizza', orderedDrink: 'drink'}
        let pizza1 = {}
        assert.throw(() => pizzUni.makeAnOrder(pizza1), 'You must order at least 1 Pizza to finish the order.')
        assert.equal(pizzUni.makeAnOrder(pizza), 'You just ordered pizza and drink.')
    });
    it('getRemainingWork', function () {

        let status = [
            {pizzaName: 'pizza', status: 'ready'},
            {pizzaName: 'pizza1', status: 'ready'}
        ]
        let statusPre = [
            {pizzaName: 'pizza', status: 'preparing'},
            {pizzaName: 'pizza1', status: 'preparing'}
        ]
        assert.equal(pizzUni.getRemainingWork(status),'All orders are complete!')
        assert.equal(pizzUni.getRemainingWork(statusPre),'The following pizzas are still preparing: pizza, pizza1.')
    });

    it('orderType', function () {
        assert.equal(pizzUni.orderType(100,'Delivery'),100)
        assert.equal(pizzUni.orderType(100,'Carry Out'),90)
    });
})