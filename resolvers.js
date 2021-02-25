const {
	getUserGists,
	getGistById,
} = require('./githubApiWrapper');

const {
	createFavorite,
	updateFavorite,
} = require('./mutations');

const {
	getAllFavorites
} = require('./dbQueries');

const resolvers = {
  Query: {
		getUserGists: async (root, args) => await getUserGists(args),
		getGistById: async (root, args) => await getGistById(args),
		getAllFavorites: async (root, args) => await getAllFavorites(args),
  },
  Mutation: {
		createFavorite: async (root, args) => await createFavorite(args),
		updateFavorite: async (root, args) => await updateFavorite(args),
  },
};

module.exports = {
	resolvers,
}