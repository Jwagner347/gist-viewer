const {
	getUserGists,
	getGistById,
	createFavorite,
} = require('./githubApiWrapper');

const resolvers = {
  Query: {
		getUserGists: async (root, args) => await getUserGists(args),
		getGistById: async (root, args) => await getGistById(args),
  },
  Mutation: {
		createFavorite: async (root, args) => await createFavorite(args),
  },
};

module.exports = {
	resolvers,
}