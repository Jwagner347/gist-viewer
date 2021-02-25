const fetch = require('node-fetch');
const transformFiles = require('./helpers/filesTransformer');
const { Client } = require('pg');

const githubApi = `https://api.github.com`;

module.exports = {
		getUserGists: async (args) => {
			const username = args.username;
			const url = `${githubApi}/users/${username}/gists`

			const response = await fetch(url);
			const gists = await response.json();
			const gistsWithTransformedFiles = gists.map(transformFiles);

			return { gists: gistsWithTransformedFiles };
		},

		getGistById: async (args) => {
			const id = args.id;
			const url = `${githubApi}/gists/${id}`

			const response = await fetch(url);
			const gist = await response.json();
			console.log('gist: ', gist);
			const gistWithTransformedFiles = transformFiles(gist);

			return gistWithTransformedFiles;
		},
};