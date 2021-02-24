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

		createFavorite: async ({gistInfo}) => {
			
			const client = new Client({
				user: 'postgres',
				host: 'localhost',
				database: 'gist_viewer',
				password: 'password',
				port: 5432,
			});

			await client.connect();
			const { owner_id, github_id, owner_name, url } = gistInfo;

			const query = {
				text: 'INSERT INTO gists(owner_id, owner_name, github_id, url) VALUES($1, $2, $3, $4)',
				values: [owner_id, owner_name, github_id, url],
			};

			await client.query(query);
			await client.end();
			// todo: if insert fails, throw error 
			// todo: move this function to separate file
			return { success: true, github_id };
			
		},

};