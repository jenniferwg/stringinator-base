const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    expect(_.contains([0, 1, 2], 2)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    expect(_.contains([0, 1, 2], 3)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const obj = {
      1: 'foo',
      2: 'bar',
      3: 'baz'
    };
    expect(_.contains(obj, 'foo')).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const obj = {
      1: 'foo',
      2: 'bar',
      3: 'baz'
    };
    expect(_.contains(obj, 'quux')).toBe(false);
  });

});