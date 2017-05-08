const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const array = [0, 1, 2, 3, 4, 5];
    expect(_.reject(array, current => current % 2 === 1)).toEqual([0, 2, 4]);
  });

  it('rejects null values from an object', () => {
    const people = {
    	Tom: 'male',
    	Mary: 'female',
    	Robert: null,
    	Tara: 'female',
    	Kim: null
    };
    expect(_.reject(people, current => current === null)).toEqual(['male', 'female', 'female']);
  });
});