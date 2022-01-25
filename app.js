const express = require('express');
const app = express();
const path = require ('path');
const port = 8000;
const route= require('./route.js');
//const Sequelize = require('./sequelize');
const sequelize = require('./sequelize.js');


app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'pug');
app.use('/',express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use('/',route);

sequelize.authenticate()
	.then(() =>{
		//console.log('ok');
		app.listen(port);

		sequelize.sync()
		.then(() =>{
			console.log('alright');
		})
		.catch((err) =>{
			console.log("model didnt sync",err);
		});

	})
	.catch((err) => {
			console.log('didnt work');
		});
