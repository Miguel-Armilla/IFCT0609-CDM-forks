const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", 
  database: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});