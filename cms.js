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
  database: "employee_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Successful connection to sql!");
  employeetrackermenu;
});

function employeetrackermenu() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        // "View All Employees By Department",
        // "View All Employees By Manager",
        "Add Employee",
        // "Remove Employee",
        "Update Employee Role",
        // "Update Employee Manager",
        "View All Roles",
        "Add Role",
        // "Remove Role",
        "View All Deparments",
        "Add Department"        
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "View All Employees":
        AllEmployees();
        break;

      case "Add Employee":
        AddEmployee();
        break;

      case "Update Employee Role":
        UpdateEmployeeRole();
        break;

      case "View All Roles":
        AllRoles();
        break;

      case "Add Role":
        AddRole();
        break;
        
      case "View All Departments":
        AllDepartments();
        break;

      case "Add Department":
        AddDepartment();
        break;
      }
    });
}

function AllEmployees () {
  connection.query("SELECT * FROM employees", function(err, res) {
    if (err) throw err; 
    console.table(['First Name', 'Last Name'], res);
    employeetrackermenu();
  });
}