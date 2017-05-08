const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    expect(_.isArrayLike([1, 2, 3])).toBe(true);
  });

  it('returns true for an array-like object', () => {
    const obj = {
    	length: 2, 
    	1: 'foo',
    	2: 'bar'
    }
    expect(_.isArrayLike(obj)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    const obj = {
    	1: 'foo',
    	2: 'bar'
    }
    expect(_.isArrayLike(obj)).toBe(false);
  });
});
