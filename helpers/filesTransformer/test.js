const chai = require('chai');
const expect = chai.expect;
const filesTransformer = require('./index.js');

describe('filesTransformer', () => {
	it('throws an error if arg is not an object', () => {
		const filesString = 'foo';
		const errorFunc = () => filesTransformer(filesString);

		expect(errorFunc).to.throw('filesObject must be of type object');
		
	});

	it('throws an error if arg is not an object', () => {
		
	});

	it('returns an empty array if object is empty', () => {
		
	});

	it('returns an empty array if object is empty', () => {
		
	});
	
	it('accepts an object and transforms each key-value pair to a single object in a new array', () => {
		
	});
  

});
