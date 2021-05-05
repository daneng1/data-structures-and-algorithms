'use strict';

const bracket = require('../multiBracketValidation.js');

describe('-----Mulit-Bracket Validation----', () => {
  it('should return null if no values are sent', () => {
    expect(bracket()).toEqual(null);
  });

  it( 'should return true if brackets are properly aligned', () => {
    expect(bracket('(){}[]()')).toEqual(true);
  });

  it( 'should return true if brackets are properly aligned', () => {
    expect(bracket('{ this is the test data(): "this is the test[]{{{{()}}}}}')).toEqual(true);
  });

  it('should return false if brackets are not properly aligned', () => {
    expect(bracket('()[}')).toEqual(false);
  });

  it('should return false if brackets are not properly aligned', () => {
    expect(bracket('(dog)[barks}')).toEqual(false);
  });
});
