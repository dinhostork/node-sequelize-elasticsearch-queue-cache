import { Dialect, Sequelize } from 'sequelize';

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize({
	dialect: env === 'development' ? 'sqlite' : process.env.DB_DIALECT as Dialect,
	storage: env === 'development' ? './temp/database.sqlite' : undefined,
	host: env !== 'development' ? process.env.DB_HOST as string : undefined,
	database: env !== 'development' ? process.env.DB as string : undefined,
	username: env !== 'development' ? process.env.DB_USER as string : undefined,
	password: env !== 'development' ? process.env.DB_PASS as string : undefined,
	logging: false,
});

export default sequelize;