// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const env = process.env.NODE_ENV || 'development';
const config = {
	dialect: env === 'development' ? 'sqlite' : process.env.DB_DIALECT,
	storage: env === 'development' ? './temp/database.sqlite' : undefined,
	host: env !== 'development' ? process.env.DB_HOST : undefined,
	database: env !== 'development' ? process.env.DB : undefined,
	username: env !== 'development' ? process.env.DB_USER : undefined,
	password: env !== 'development' ? process.env.DB_PASS : undefined,
};

module.exports = config;