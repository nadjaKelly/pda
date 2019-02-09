var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  // add 1 to 4 and get 5
  it('should add two intengers and return sum', function() {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.add(4);
    assert.equal(calculator.runningTotal,5);
  });

  // subtract 4 from 7 and get 3
  it('should subtract two intengers and return a difference', function() {
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.subtract(4);
    assert.equal(calculator.runningTotal,3);
  });

  // multiply 3 by 5 and get 15
  it('should multiply 3 by 5 and return a product', function() {
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.multiply(5);
    assert.equal(calculator.runningTotal,15);
  });

  // divide 21 by 7 and get 3
  it('should divide 21 by 7 and return a quotient', function() {
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.divide(7);
    assert.equal(calculator.runningTotal,3);
  });


//************************************************//
  // concatenate multiple number button clicks
  it('should concatenate multiple integers', function() {
    calculator.numberClick(4);
    calculator.numberClick(9);
    calculator.numberClick(6);
    assert.equal(calculator.runningTotal,496);
  });

  // chain multiple operations together
  it('should chain multiple operations', function() {
    calculator.numberClick(2);
    calculator.operatorClick('-')
    calculator.subtract(1);
    calculator.operatorClick('*')
    calculator.multiply(2);
    calculator.operatorClick('+')
    calculator.add(10);
    assert.equal(calculator.runningTotal,12);
  });

  // clear the running total without affecting the calculation
  it('should clear running total not affecting calculation', function() {
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(6);
    calculator.clearClick();
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal,5);
  });





  it('should clear running total', function() {
    calculator.numberClick(6);
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
  })

});
