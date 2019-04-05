const expect = require('chai').expect;
let calc = require('./calculator');

describe('test de calculatrice',  () =>{

    let result;

    it('1 + 2 est bien égal à 3', () => {
        result = calc.add(1, 2);
        expect(result).equal(3);
    });

    it('5 - 2 est bien égal à 3', () => {
        result = calc.substract(5, 2);
        expect(result).equal(3);
    });

    it('4 x 2 est bien égal à 8', () => {
        result = calc.multiply(4, 2);
        expect(result).equal(8);
    });

    it('8 / 2 est bien égal à 4',  () => {
        result = calc.divide(8, 2);
        expect(result).equal(4);
    });
});