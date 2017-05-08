const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    expect(_.some([0, 1, 2, 4], current => current % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    expect(_.some([0, 2, 4], current => current % 2 === 1)).toBe(false);
  });

});