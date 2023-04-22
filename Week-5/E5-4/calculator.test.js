const mathOperations = require('./mathOperations');

describe('mathOperations', () => {
  describe('sum', () => {
    it('should return the sum of two positive numbers', () => {
      expect(mathOperations.sum(2, 3)).toEqual(5);
    });
    
    it('should return the sum of a positive and a negative number', () => {
      expect(mathOperations.sum(-2, 3)).toEqual(1);
    });
  });
  
  describe('diff', () => {
    it('should return the difference between two positive numbers', () => {
      expect(mathOperations.diff(5, 2)).toEqual(3);
    });
    
    it('should return the difference between a positive and a negative number', () => {
      expect(mathOperations.diff(5, -2)).toEqual(7);
    });
  });
  
  describe('product', () => {
    it('should return the product of two positive numbers', () => {
      expect(mathOperations.product(2, 3)).toEqual(6);
    });
    
    it('should return the product of a positive and a negative number', () => {
      expect(mathOperations.product(-2, 3)).toEqual(-6);
    });
  });
});
