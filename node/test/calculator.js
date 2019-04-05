const calc = {};

    calc.add = function (a, b) {
        var result = a + b;
        return result;
    };

    calc.substract = function (a, b) {
        var result = a - b;
        return result;
    };

    calc.multiply = function (a, b) {
        var result = a * b;
        return result;
    };

    calc.divide = function (a, b) {
        var result = a / b;
        return result;
    };

module.exports = calc;