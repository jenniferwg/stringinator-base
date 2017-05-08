const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const array = [0, 1, 2, 3, 4, 5];
    expect(_.filter(array, current => current % 2 === 1)).toEqual([1, 3, 5]);
  });

  it('filters an object to only numeric values', () => {
    const array = ['apple', 1, 'banana', 2, 3];
    expect(_.filter(array, current => typeof current === 'number')).toEqual([1, 2, 3]);
  });
});