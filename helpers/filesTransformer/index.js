/**
 * Transforms each key-value pair of an Object to the value (an object) in a new array
 * 
 * @param {Object} filesObject - Object of files for a particular gist
 * @returns {Array} - Array of file objects
 */

module.exports = (filesObject) => {
	const isObject = obj => typeof obj === 'object' && !Array.isArray(obj);

	if (!isObject(filesObject)) throw new Error('filesObject must be of type object')

}