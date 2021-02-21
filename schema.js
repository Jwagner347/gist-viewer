const schema = `
type Query {
	getUserGists(username: String!): Gists
}

type Owner {
	avatar_url: String
	gravatar_id: String
	url: String!
	html_url: String!
	followers_url: String
	following_url: String
	gists_url: String!
	starred_url: String
	repos_url: String
}

type Gist {
	url: String!
	owner: Owner!
}

type Gists {
	gists: [Gist]
}
`;

module.exports = {
	schema
}