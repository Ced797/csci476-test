const Sequelize = require('sequelize');
const sequelize = require('./../sequelize.js');
const user = require('./user.js');

const pass = sequelize.define('pass', {
	uid: {
		type:Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
	},
	pass: {
	    type:Sequelize.STRING,
		allowNull: false
	}

});

//pass.belongsTo(user);
//user.hasOne(pass);

module.exports = pass;