const { getUserGists, getGistById } = require('./githubApiWrapper');

const resolvers = {
  Query: {
		getUserGists: async (root, args) => await getUserGists(args),
		getGistById: async (root, args) => await getGistById(args),
  },
};

module.exports = {
	resolvers,
}