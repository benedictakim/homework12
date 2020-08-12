-- DROP DATABASE IF EXISTS employee_db;
-- CREATE database employee_db;

-- USE employee_db;

-- CREATE TABLE department (
--   id INT NOT NULL AUTO_INCREMENT,
--   name VARCHAR(30) NULL,
--   PRIMARY KEY (id)
-- );


-- CREATE TABLE role (
--   id INT NOT NULL auto_increment,
--   title VARCHAR(30),
--   salary DECIMAL,
--   department_id INT,
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE employee (
--   id INT NOT NULL auto_increment,
--   first_name VARCHAR(30),
--   last_name VARCHAR(30),
--   role_id INT,
--   manager_id INT,
--   PRIMARY KEY (id)
-- );

-- INSERT INTO department (name)
-- VALUES ("engineering");
-- INSERT INTO department (name)
-- VALUES ("finance");
-- INSERT INTO department (name)
-- VALUES ("legal");
-- INSERT INTO department (name)
-- VALUES ("sales");

-- INSERT INTO role (title, salary, department_id)
-- VALUES ("Accountant", 125000, 2);

-- INSERT INTO role (title, salary, department_id)
-- VALUES ("Accountant Manager", 150000, 2);

-- INSERT INTO role (title, salary, department_id)
-- VALUES ("Lead Engineer", 150000, 1);

-- INSERT INTO role (title, salary, department_id)
-- VALUES ("Legal Team Lead", 250000, 3);

-- INSERT INTO role (title, salary, department_id)
-- VALUES ("Sales Lead", 100000, 4);

-- INSERT INTO role (title, salary, department_id)
-- VALUES ("Salesperson", 80000, 4);

-- INSERT INTO role (title, salary, department_id)
-- VALUES ("Software Engineer", 120000, 1);

-- INSERT INTO role (title, salary, department_id)
-- VALUES ("Lawyer", 190000, 3);

-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES ("Tom", "Allen",  8, null);

-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES ("Sarah", "Lourd",  4, null);

-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES ("Malia", "Brown",  1, null);

-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES ("Kevin", "Tupik",  7, null);

-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES ("Ashley", "Rodriguez",  3, null);

-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES ("John", "Doe",  5, null);

-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES ("Mike", "Chan",  6, null);

-- UPDATE employee
-- SET manager_id = 2
-- WHERE id = 1

-- UPDATE employee
-- SET manager_id = 5
-- WHERE id = 4

-- UPDATE employee
-- SET manager_id = 5
-- WHERE id = 6

-- UPDATE employee
-- SET manager_id = 6
-- WHERE id = 7