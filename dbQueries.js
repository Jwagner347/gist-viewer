const { Client } = require('pg');

// todo: change favorites response in schema to return everything

module.exports = {
		getAllFavorites: async () => {
			
			const client = new Client({
				user: 'postgres',
				host: 'localhost',
				database: 'gist_viewer',
				password: 'password',
				port: 5432,
			});

			await client.connect();

			const { rows } = await client.query('SELECT * FROM gists WHERE favorited = TRUE');
			await client.end();
			// todo: if insert fails, throw error 
			return {favorites: rows};
			
		},

};