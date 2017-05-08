const _ = require('../../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    expect(_.first([0, 1])).toEqual(0);
  });

  it('returns the first 2 elements of an array', () => {
    expect(_.first([0, 1, 2], 2)).toEqual([0, 1]);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.first([0, 1, 2], 5)).toEqual([0, 1, 2]);
  });
});