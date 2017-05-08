const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const array = [0, 1, 1, 2, 3, 4, 4];
    expect(_.uniq(array)).toEqual([0, 1, 2, 3, 4]);
  });
});