const dbConfig = require('./dbConfig');
const createDbClient = require('./utils/createDbClient');

// todo: change favorites response in schema to return everything

// todo: extract db stuff into a separate file

module.exports = {
		getAllFavorites: async () => {
			const client = createDbClient(dbConfig);
			await client.connect();

			const { rows } = await client.query('SELECT * FROM gists WHERE favorited = TRUE');
			await client.end();
			// todo: if insert fails, throw error 
			return {favorites: rows};
		},

};