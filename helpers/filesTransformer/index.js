/**
 * Transforms the files property to a new array of file objects
 * 
 * @param {Object} gistObject - Object of files for a particular gist
 * @returns {Array} - Array of file objects
 */

module.exports = (gistObject) => {
	const isObject = obj => typeof obj === 'object' && !Array.isArray(obj);

	if (!isObject(gistObject)) throw new Error('gistObject must be of type object');
	if(!gistObject["files"]) throw new Error('files property missing!');
	if(!isObject(gistObject["files"])) throw new Error('files property must be of type object');

	const transformedFiles = Object.values(gistObject["files"]);

	const gistWithTransformedFiles = {
		...gistObject,
		files: transformedFiles,
	}

	return gistWithTransformedFiles;

}