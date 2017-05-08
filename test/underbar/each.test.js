const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    const array = [0, 1, 2, 3];
    let count = 0;
    _.each(array, (current, index) => {
    	expect(current).toEqual(array[index]);
    	count++;
    });
    expect(count).toEqual(4);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const obj = {
    	length: 3,
    	1: 'foo',
    	2: 'bar',
    	3: 'baz'
    };
    let count = 0;
    _.each(obj, (current, key) => {
    	expect(current).toEqual(obj[key]);
    	count++;
    });
    expect(count).toEqual(3);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const obj = {
    	first: 'foo',
    	second: 'bar',
    	third: 'baz'
    };
    let count = 0;
    _.each(obj, (current, key) => {
    	expect(current).toEqual(obj[key]);
    	count++;
    });
    expect(count).toEqual(3);
  });
});

