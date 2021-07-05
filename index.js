const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/page-template');
const { writeFile, copyFile } = require('./generate-site');

class teamBuilder {
  constructor() {
    this.manager;
    this.engineer;
    this.intern;
  };
  generateManager() {
    var team = [];
    console.log(`
================================
    Welome to Team Generator    
================================
    `)
    inquirer
      .prompt([
        { 
          type: 'input',
          name: 'name',
          message: "What is the Manager's Name? (REQUIRED)",
          validate: nameInput => {
            if(nameInput) {
              return true;
            } else {
              console.log("Please enter a name!"); 
              return false;
            }
          }
        },
        {          
          type: 'input',
          name: 'email',
          message: "What is the Manager's email? (REQUIRED)",
          validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log("Please enter an email!"); 
                return false;
            }
          }
        },
        {
          type: 'input',
          name: 'office',
          message: "What is the Manager's office number? (REQUIRED)",
          validate: officeInput => {
            if (officeInput){
              let a = isNaN(officeInput);
              if(!a) {
                return true;
              }
              else {
                console.log("Please enter a valid office number");
                return false;
              }
            }
            else {
              console.log("Please enter a valid office number");
              return false;
            }
          }
        }
      ])
      .then(({name,email,office}) => {
        let role = 'Manager'
        this.manager = new Manager(name,email,role,office);
        team.push(this.manager);
        console.log(this.manager);
      })
  };
}

new teamBuilder().generateManager();