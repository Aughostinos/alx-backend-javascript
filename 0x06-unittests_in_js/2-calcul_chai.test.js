const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return 6 for SUM(1.4, 4.5)', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should handle negative numbers for SUM', () => {
      expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return -4 for SUBTRACT(1.4, 4.5)', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should handle negative results for SUBTRACT', () => {
      expect(calculateNumber('SUBTRACT', 2.5, 3.5)).to.equal(-1);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return 0.2 for DIVIDE(1.4, 4.5)', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it("should return 'Error' for DIVIDE(1.4, 0)", () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should handle division with negative numbers', () => {
      expect(calculateNumber('DIVIDE', -4.5, 1.2)).to.equal(-4);
    });
  });

  describe('Invalid operation type', () => {
    it('should throw an error for invalid operation type', () => {
      expect(() => calculateNumber('MULTIPLY', 2, 3)).to.throw('Invalid operation type');
    });
  });
});
