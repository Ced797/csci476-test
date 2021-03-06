const Sequelize = require('sequelize');
const sequelize = require('./../sequelize.js');


const donation = sequelize.define('donation', {
	id: {
		type:Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
	},
	fname: {
	    type:Sequelize.STRING,
	},
	lname: {
	    type:Sequelize.STRING,
	},
	phone: {
	    type:Sequelize.STRING,
	},
	address: {
	    type:Sequelize.STRING,
	},
	donationTotal:: {
	    type:Sequelize.STRING,
		allowNull: false
	},
	donationCategory: {
	    type:Sequelize.STRING,
		allowNull: false
	},
	date: {
	    type:Sequelize.STRING,
		allowNull: false
	},
	notes: {
	    type:Sequelize.STRING,
	}
});

module.exports = donation;