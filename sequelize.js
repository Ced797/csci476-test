const Sequelize = require('sequelize');
const sequelize = new Sequelize('my_littlec5_exam', 'my.littlec5', 'h0286u77',{
	host: 'deltona.birdnest.org',
	dialect: 'mysql',
	define: {
		timestamps: false
	}
});

module.exports = sequelize;
