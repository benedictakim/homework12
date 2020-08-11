const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "I1tsql",
  database: "top_songsDB"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});