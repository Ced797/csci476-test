const express = require('express');
const Sequelize = require('./sequelize');
const sequelize = require('./sequelize.js');
const {op} = require('./sequelize');
const con = require('./connector.js');

const user = require('./models/user.js');
const r = express.Router();


r.get('/', (req,res) =>{
	res.render('home');
});

r.post('/', (req,res) => {
	
var name = req.body.user;
var pass = req.body.pass;        // definetely have to add a search for usernames and passwords here
	
	var x = 'Select username,pass From users where pass =? AND username =?';
 
con.query(x,[pass,name], function (err,result,fields)  {
	
	 console.log(result[0].username);
		
      if( (result[0].username == name ) && (result[0].pass == pass) ){
		 	res.redirect('/editUsers');
	  }
	
	  if( (result[0].username !== name ) || (result[0].pass !== pass) ){
		  console.log('456');
		 	res.redirect('/');
	  }
  
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
	}).catch((err)=>{console.log('error-3',err)});
	
});

r.get('/editUsers/:id',(req,res) => {
	const id = req.params.id;
	user.findByPk(id).then((user) =>{
		console.log(user);
		res.render('singleUser',{user:user});
	}).catch((err)=>{console.log('error-3',err)});
});

r.post('/editUsers/:id/delete', (req,res) => {
	user.findByPk()
});

r.post('/donation',(req,res) =>{
	
});
module.exports = r;