# gist-viewer

The Gist Viewer allows you to easily access information on public gists via a GraphQL API. It also allows you to save your favorite gists to a postgres database, which runs in docker.

## Startup Instructions

1. Download and Install Docker Community Edition [https://store.docker.com/editions/community/docker-ce-desktop-mac](https://store.docker.com/editions/community/docker-ce-desktop-mac)

2. Run `npm install`

3. Start the API and postgres database with `./start_api.sh`

4. The GraphQL API will be available at `http://localhost:3000/local/graphql`
