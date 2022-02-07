const express = require('express');
const Sequelize = require('./sequelize');
const sequelize = require('./sequelize.js');
const {op} = require('./sequelize');
const con = require('./connector.js');

const user = require('./user.js');
//const pass = require('./pass.js');
const r = express.Router();


r.get('/', (req,res) =>{
	res.render('home');
});

r.post('/', (req,res) => {
	
var name = req.body.user;
var pass = req.body.pass;        // definetely have to add a search for usernames and passwords here
	
	var x = 'Select username,pass From users where pass =? AND username =?';
 
con.query(x,[pass,name], function (err,result,fields)  {
	
	 Object.keys(result).forEach(function(key) {
      var row = result[key];
      if( (row.username == name ) && (row.pass == pass) ){
		 	res.redirect('/editUser');
	  }
	
	  if( (row.username !== name ) || (row.pass !== pass) ){
		  console.log('456');
		 	res.send('you done goofed');
	  }
    });
	
});
	con.end();
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
		pass:createPass,
		email:email,
		fname:fname,
		lname:lname
	}).then(() =>{res.redirect('/')}).catch((err)=>{console.log('error-2',err)});
	
	
	
});

r.get('/editUsers',(req,res)=>{
	user.findAll().then((users) => {
		console.log(users.username+"   abcdef");
		
		res.render('editUsers',{users : users});
	})
	
});


r.post('/editUsers/delete', (req,res) => {
	
});
module.exports = r;