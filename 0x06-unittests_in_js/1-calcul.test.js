const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return 6 for SUM(1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should handle negative numbers for SUM', () => {
      assert.strictEqual(calculateNumber('SUM', -1.2, -3.7), -5);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return -4 for SUBTRACT(1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should handle negative results for SUBTRACT', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 3.5), -1);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return 0.2 for DIVIDE(1.4, 4.5)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it("should return 'Error' for DIVIDE(1.4, 0)", () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should handle division with negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -4.5, 1.2), -4);
    });
  });

  describe('Invalid operation type', () => {
    it('should throw an error for invalid operation type', () => {
      assert.throws(() => {
        calculateNumber('MULTIPLY', 2, 3);
      }, /Invalid operation type/);
    });
  });
});
