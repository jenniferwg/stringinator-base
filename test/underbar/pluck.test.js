const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = {
    	Matt: {
    		age: 15,
    		birthday: 'October 10'
    	},
    	Ruby: {
    		age: 20,
    		birthday: 'March 28'
    	},
    	Tom: {
    		age: 35,
    		birthday: 'December 15'
    	}
    };
    expect(_.pluck(people, 'age')).toEqual([15, 20, 35]);
    
  });
});