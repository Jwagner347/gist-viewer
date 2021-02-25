const dbConfig = require('./dbConfig');
const createDbClient = require('./utils/createDbClient');

// todo: change favorites response in schema to return everything

module.exports = {
		getAllFavorites: async () => {
			const client = createDbClient(dbConfig);
			await client.connect();

			const { rows } = await client.query('SELECT * FROM gists WHERE favorited = TRUE');
			await client.end();
			// todo: if insert fails, throw error 
			return {favorites: rows};
		},
		createFavorite: async ({gistInfo}) => {
			
			const client = createDbClient(dbConfig);

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