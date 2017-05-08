const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    expect(_.indexOf([1, 2, 3], 1)).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    expect(_.indexOf([1, 2, 3], 3)).toBe(2);
  });

  it('returns -1 for a missing value', () => {
    expect(_.indexOf([1, 2, 3], 4)).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    expect(_.indexOf([1, 2, 3, 2], 2)).toBe(1);
  });

  it('starts searching at the given offset', () => {
    expect(_.indexOf([1, 2, 3, 2], 2, 2)).toBe(3);
  });

});