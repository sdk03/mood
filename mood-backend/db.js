const mysql = require('mysql2');
require('dotenv').config();


const db = mysql.createConnection({
    host: process.env.DB_HOST ,
    user:  process.env.DB_USER ,
    password:  process.env.DB_PASSWORD,
    database:  process.env.DB_DATABASE,
    port: process.env.DB_PORT
  });
  
  // CHECKING DB CONNECTION
  db.connect(error => {
      if(error){console.log(error)}
      else{console.log('DB SUCCESS CONNECTION')}
  });
  
  module.exports = db;