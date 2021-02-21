const chai = require('chai');
const expect = chai.expect;
const filesTransformer = require('./index.js');

describe('filesTransformer', () => {

	it('throws an error if arg is not an object', () => {
		const gistString = 'foo';
		const errorFunc = () => filesTransformer(gistString);

		expect(errorFunc).to.throw('gistObject must be of type object');
		
	});

	it('throws an error if files property is not an object', () => {
		const objWithFilesString = {
			"files": "foo"
		};
		const errorFunc = () => filesTransformer(objWithFilesString);

		expect(errorFunc).to.throw('files property must be of type object');
		
	});

	it('throws an error if files property does not exist', () => {
		const objWithNoFiles = {
			"foo": "bar"
		};
		const errorFunc = () => filesTransformer(objWithNoFiles);

		expect(errorFunc).to.throw('files property missing!');
		
	});

	it('returns an empty array for files if files property is an empty object', () => {
		const gistObj = {
			"files": {},
			"url": "foo.com",
		};

		const expectedOutput = {
			"files": [],
			"url": "foo.com",
		}

		expect(filesTransformer(gistObj)).to.deep.equal(expectedOutput);
		
	});

	it('accepts a gist object and transforms the files property to a new array of file objects', () => {
		const objWithFilesProp = {
			"url": "foo.com",
			"files": {
				"foo.json": {
					"filename": "foo.json",
					"type": "application/json",
				},
				"bar.json": {
					"filename": "bar.json",
					"type": "application/json",
				},
				"biz.json": {
					"filename": "biz.json",
					"type": "application/json",
				},
			}
		};

		const expectedOutput = {
			"url": "foo.com",
			"files": [
				{
					"filename": "foo.json",
					"type": "application/json",
				},
				{
					"filename": "bar.json",
					"type": "application/json",
				},
				{
					"filename": "biz.json",
					"type": "application/json",
				},
			],	
		}

		expect(filesTransformer(objWithFilesProp)).to.deep.equal(expectedOutput);
		
	});
  

});
