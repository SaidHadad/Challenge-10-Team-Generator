const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');
var team = [];

class teamBuilder {
  constructor() {
    this.manager;
    this.engineer;
    this.intern;
  };

  generateManager() {
    console.log(`
================================
    Welome to Team Generator    
================================
    `)
    inquirer.prompt([
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
        this.buildteam();
      });
  };

  buildteam(){
    console.log(`
==============================
    Lets create your team             
==============================
    `)
    inquirer.prompt([
      {
        type: 'list',
        name: 'buildList',
        message: "Select what would you like to do:",
        choices: ["Add an Engineer", "Add an Intern", "Finish the process"]
      }
    ])
    .then(({buildList}) => {
      if(buildList == 'Add an Engineer') {
        this.generateEngineer();
      }
      else if (buildList == "Add an Intern") {
        this.generateIntern();
      }
      else if (buildList == "Finish the process") {
        writeFile(generatePage(team));
        // copyFile();
      }
    });
  };
  
  generateEngineer() {
    console.log(`
================================
  Add an Engineer to the Team
================================
    `)
    inquirer.prompt([
        { 
          type: 'input',
          name: 'name',
          message: "What is the Engineer's Name? (REQUIRED)",
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
          message: "What is the Engineer's email? (REQUIRED)",
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
          name: 'gitHub',
          message: "What is the Engineer's GitHub? (REQUIRED)",
          validate: gitHubInput => {
            if (gitHubInput){
                return true;
              }
            else {
              console.log("Please enter a GitHub Username");
              return false;
            }
          }
        }
      ])
      .then(({name,email,gitHub}) => {
        let role = 'Engineer'
        this.engineer = new Engineer(name,email,role,gitHub);
        team.push(this.engineer);
        this.buildteam();
      });
  };

  generateIntern() {
    console.log(`
================================
    Add an Intern to the Team
================================
    `)
    inquirer.prompt([
        { 
          type: 'input',
          name: 'name',
          message: "What is the Intern's Name? (REQUIRED)",
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
          message: "What is the Intern's email? (REQUIRED)",
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
          name: 'school',
          message: "What is the Intern's School? (REQUIRED)",
          validate: schoolInput => {
            if (schoolInput){
                return true;
              }
            else {
              console.log("Please enter a School");
              return false;
            }
          }
        }
      ])
      .then(({name,email,school}) => {
        let role = 'Intern'
        this.intern = new Intern(name,email,role,school);
        team.push(this.intern);
        this.buildteam();
      });
  };
} 

new teamBuilder().generateManager();