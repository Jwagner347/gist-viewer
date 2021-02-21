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

type File {
	filename: String!
	type: String!
	language: String!
	raw_url: String!
	size: Int!
}

type Gist {
	url: String!
	owner: Owner!
	files: [File!]
}

type Gists {
	gists: [Gist]
}
`;

module.exports = {
	schema
}