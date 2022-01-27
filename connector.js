const mysql = require('mysql2');

const con = mysql.createConnection({
  host: 'deltona.birdnest.org',
  user: 'my.littlec5',
  database: 'my_littlec5_exam',
  password: 'h0286u77'
});

module.exports = con;