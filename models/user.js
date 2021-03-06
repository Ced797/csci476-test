const Sequelize = require('sequelize');
const sequelize = require('./../sequelize.js');
const pass = require('./pass.js');

const user = sequelize.define('user', {
	id: {
		type:Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
	},
	username: {
	    type:Sequelize.STRING,
		allowNull: false
	},
	pass: {
	    type:Sequelize.STRING,
		allowNull: false
	},
	email: {
		type:Sequelize.STRING,
		allowNull: false
	},
	fname: {
		type:Sequelize.STRING,
		allowNull: false
	},
	lname: {
		type:Sequelize.STRING,
		allowNull: false
	}
});

/*pass.belongsTo(user, {foreignKey: 'id'});
user.hasOne(pass);
*/
module.exports = user;