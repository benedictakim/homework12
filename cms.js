const mysql = require("mysql");
const inquirer = require("inquirer");
const { resolveNaptr } = require("dns");
require('console.table');

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
  console.log("=====Welcome to the Employee Tracker!=====");
  employeetrackermenu ();
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
        "View All Departments",
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
        console.log("Getting all department");
        break;

      case "Add Department":
        AddDepartment();
        break;
      }
    });
}

function AllEmployees () {
  connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary FROM employee LEFT JOIN role ON employee.role_id=role.id LEFT JOIN department ON role.department_id=department.id", function(err, res) {
    if (err) throw err; 
    console.table(res);
    employeetrackermenu();
  });
}

function AllDepartments () {
  connection.query("SELECT * FROM department", function(err, res) {
    if (err) throw err; 
    console.table(res);
    employeetrackermenu();
  });
}

function AllRoles () {
  connection.query("SELECT * FROM role", function(err, res) {
    if (err) throw err; 
    console.table(res);
    employeetrackermenu();
  });
}

function AddEmployee () {
  inquirer
   .prompt([
    {name: "first_name",
    type: "input",
    message: "What is the employee's FIRST NAME?"
    },
    {name: "last_name",
    type: "input",
    message: "What is the employee's LAST NAME?"
    }
    // {name: "title",
    // type: "rawlist",
    // message: "What is the employee's ROLE?",
    // choices: async function() {
    //   let choiceArray = []
    //   await connection.query("SELECT title FROM role", function (err, res) {
    //     if (err) throw err;
    //     return(res);
    //     console.log(res)   
    //   });
    //   return await choiceArray
    // }    
   ])
  .then(function(answer) {
    "INSERT INTO employee SET ?",
    {
      first_name: answer.first_name,
      last_name: answer.last_name,
      // role_id: answer.title
    },
    // console.log(anwer.first_name)
    // console.log(answer.last_name)
    function (err) {
      if (err) throw err;
      console.log("The employee ${first_name} was added successfully!");
      // return to main menu
      employeetrackermenu();
    };
  });
};

// function AddRole
// function AddDepartment

// //prompt which employee? list first_name and last_name
// function UpdateEmployeeRole