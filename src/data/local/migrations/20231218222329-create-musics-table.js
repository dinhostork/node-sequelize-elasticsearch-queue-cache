'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		return queryInterface.createTable('musics', {
			id: {
				type: Sequelize.UUIDV4,
				primaryKey: true,
				allowNull: false
			},
			name: {
				type: Sequelize.STRING(),
				allowNull: false
			},
			lyrics: {
				type: Sequelize.TEXT,
				allowNull: true
			},
			youtube_link: {
				type: Sequelize.STRING(),
				allowNull: true
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false
			}
		});
	},

	async down (queryInterface) {
		return queryInterface.dropTable('musics');
	}
};
