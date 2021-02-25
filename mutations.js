const { Client } = require('pg');

module.exports = {
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
			return { success: true, github_id };
			
		},

};