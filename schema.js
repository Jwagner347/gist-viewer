const schema = `
type Query {
	getUserGists(username: String!): Gists
	getGistById(id: String!): Gist
}

type Mutation {
	createFavorite(gistInfo: FavoritedGist): FavoriteResponse
	updateFavorite(gistInfo: UpdatedGist): FavoriteResponse
}

input FavoritedGist {
	owner_id: Int!
	owner_name: String!
	github_id: String!
	url: String!
	favorited: Boolean
}

input UpdatedGist {
	github_id: String!
	favorited: Boolean
}

type FavoriteResponse {
	success: Boolean!
	github_id: String!
}

type Owner {
	login: String!
	id: Int!
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
	forks_url: String
	commits_url: String!
	id: String!
	git_pull_url: String!
	git_push_url: String!
	html_url: String!
	created_at: String!
	updated_at: String
	description: String
	comments: Int
	comments_url: String
}

type Gists {
	gists: [Gist]
}
`;

module.exports = {
	schema
}