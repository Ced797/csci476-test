const express = require('express');
const Sequelize = require('./sequelize');
const sequelize = require('./sequelize.js');
const user = require('./user.js');
const pass = require('./pass.js');
const r = express.Router();

r.get('/', (req,res) =>{
	res.render('home');
});

r.post('/', (req,res) => {
	var name = req.body.user;
	var pass = req.body.pass;        // definetely have to add a search for usernames and passwords here
	
	const dataUser = user.findOne({where: {name:name} });
	const dataPass = user.findOne({where: {pass:pass} });
});

r.get('/home', (req,res) => {
	res.render('actualhome');
});

r.get('/createUser',(req,res) => {      // page for create a username and password
	res.render('createUserpass');
});

r.post('/createUser',(req,res) => {     // post request for createing a username and password
	
	var fname = req.body.fname;  // first last names, and email
	var lname = req.body.lname;
	var email = req.body.email;
	
	//var x =1;
	var createUser = req.body.createUser;  // username and password
	var createPass = req.body.createPass;
	
	user.create({
		id:req.body.id,
		username:createUser,
		email:email,
		fname:fname,
		lname:lname
	}).then(() =>{}).catch((err)=>{console.log('error-2',err)});
	
	pass.create({
		uid:req.body.id,
		pass:createPass
	}).then(() =>{res.redirect('/')}).catch((err)=>{console.log('error-3',err)});
	
	
	
});

module.exports = r;