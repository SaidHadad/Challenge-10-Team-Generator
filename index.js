const inquirer = require('inquirer');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/page-template');
const { writeFile, copyFile } = require('./generate-site');