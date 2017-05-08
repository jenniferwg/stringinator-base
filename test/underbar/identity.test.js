const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    expect(_.identity(null)).toBeNull();
  });

  it('returns the number if given a number', () => {
    expect(_.identity(1)).toBe(1);
  });

  it('returns the same array if given an array', () => {
    expect(_.identity([0, 1, 2])).toEqual([0, 1, 2]);
  });

  it('returns the same object if given an object', () => {
    expect(_.identity({ 1: 'foo', 2: 'bar'})).toEqual({ 1: 'foo', 2: 'bar'});
  });
});