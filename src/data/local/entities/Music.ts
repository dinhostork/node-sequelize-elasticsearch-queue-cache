import { Model, DataTypes } from 'sequelize';
import sequelize  from '../../../config/database';

export class Music extends Model {
	public id!: string;
	public name!: string;
	public lyrics!: string;
	public youtubeLink!: string;
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

Music.init({
	id: {
		type: DataTypes.UUIDV4,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
		allowNull: false
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	lyrics: {
		type: DataTypes.TEXT,
		allowNull: true
	},
	youtubeLink: {
		type: DataTypes.STRING,
		allowNull: true
	},
	createdAt: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: Date.now()
	},
	updatedAt: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: Date.now()
	},
}, {
	sequelize,
	underscored: true,
	tableName: 'musics'
});