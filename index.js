// declare the variables to use the required modules and functions, such as inquirer, write/copy file
// our objects manager, engineer and intern. And the template for the html generatePage
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

// declare a global array to store the user input
var team = [];

// declare a class that is calling our 3 objects manager, engineer and intern
class teamBuilder {
  constructor() {
    this.manager;
    this.engineer;
    this.intern;
  };

  // This function just asks the user if they'd like to add an engineer an intern or finish creating the team
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
    // 3 ifs for each case
    .then(({buildList}) => {
      if(buildList == 'Add an Engineer') {
        this.generateEngineer();
      }
      else if (buildList == "Add an Intern") {
        this.generateIntern();
      }
      else if (buildList == "Finish the process") {
        // pushes the team array into the generatePage function so we can use the values on the template
        writeFile(generatePage(team));
        copyFile();
        console.log('file created');       
      }
    });
  };

  // first function of teamBuilder is to get the manager input
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
              // validate it's a number on the office field
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
      // takes the name, email, and office inputs and pushes them onto a new Manager object
      .then(({name,email,office}) => {
        let role = 'Manager'
        this.manager = new Manager(name,email,role,office);
        team.push(this.manager);
        // after getting the manager info calls for a function to build the rest of the team
        this.buildteam();
      });
  };

  // function of teamBuilder to get the engineer input
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
      // creates a new Engineer object and pushes our input into the array, updates the array team with the engineer info
      .then(({name,email,gitHub}) => {
        let role = 'Engineer'
        this.engineer = new Engineer(name,email,role,gitHub);
        team.push(this.engineer);
        // calls for the build team function so the user gets to chose what to do next
        this.buildteam();
      });
  };

  // function of teamBuilder to get the intern input
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
      // creates a new Intern object and pushes our input into the array, updates the array team with the Intern info
      .then(({name,email,school}) => {
        let role = 'Intern'
        this.intern = new Intern(name,email,role,school);
        team.push(this.intern);
        this.buildteam();
      });
  };
} 

// calls for a new teamBuilder object and starts it's first function generate a Manager
new teamBuilder().generateManager();