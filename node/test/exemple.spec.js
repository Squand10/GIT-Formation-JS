

const assert = require ('assert');
const should = require ('chai').should();
const expect = require('chai').expect;

describe('Exemple de test: ', () => {


    let data = [];
    let obj = {};

    beforeEach( () => {
         data = [1, 2, 0, 4, 5];
         obj = {name: 'John', lastname: 'Doe', email: 'john.doe@gmail.com'};
    });


    it('Il y 5 valeurs dans le tableau', () => {
        assert.strictEqual(data.length, 5);
    });

    it('pending test');   //Test en attente

    it('2x3 should be equal to 6', () => {
        assert.strictEqual(2*3, 6);
    });

    it('4 should be smaller than 5', () => {
        (4).should.be.below(5);
    });

    it('5 should be smaller or equal to 5', () => {
        (5).should.be.most(5);
    });

    it('foo === foo', () => {
        expect('foo').to.equal('foo');
    });

    it('data is an Array', () => {
        expect(data).to.be.an.instanceOf(Array);
    });

    it('data a 5 valeurs', () => {
        expect(data).length(5);
    });

    it('Il y a la valeur 0 dans data', () => {
        expect(data).contains(0);
    });

    it('Il n\'y a pas la valeur 3 dans data', () => {
        expect(data).not.contains(3);
    });

    it('obj is an Object', () => {
        expect(obj).to.be.an.instanceOf(Object);
    });

    it('obj.name === "John"', () => {
        expect(obj).have.property('name', 'John');
    });

    it('obj have key "name", "lastname", & "email"', () => {
        expect(obj).have.all.keys('name', 'lastname', 'email');
    });

    it('addition fonctionne', () => {
        expect
    })

});