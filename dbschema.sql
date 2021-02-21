CREATE TABLE gists (
	id 					serial NOT NULL PRIMARY KEY,
	owner_id 		integer NOT NULL,
	owner_name	varchar(50) NOT NULL,
	gist_id			varchar(100) NOT NULL,
	url					varchar(255) NOT NULL,
	favorited		boolean DEFAULT FALSE
);