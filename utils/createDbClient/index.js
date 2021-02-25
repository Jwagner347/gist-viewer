const { Client } = require('pg');

module.exports = (dbConfig) => {
	return new Client(dbConfig);
}