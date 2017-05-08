const _ = require('../../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      expect(_.every([1, 2, 3])).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const array = [1, 3, 5, 7];
      expect(_.every(array, current => current % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const array = [1, 2, 3, 5, 7];
      expect(_.every(array, current => current % 2 === 1)).toBe(false);
    });

  });
});