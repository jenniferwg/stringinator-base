const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const array = [0, 1, 2, 3];
    expect(_.reduce(array, (accumulator, current) => accumulator += current, 6)).toBe(12);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const array = [0, 1, 2, 3];
    expect(_.reduce(array, (accumulator, current) => accumulator += current)).toBe(6);
  });

});