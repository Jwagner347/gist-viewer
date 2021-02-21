const { getUserGists } = require('./githubApiWrapper');

const resolvers = {
  Query: {
		getUserGists: async (root, args) => await getUserGists(args),
  },
};

module.exports = {
	resolvers,
}