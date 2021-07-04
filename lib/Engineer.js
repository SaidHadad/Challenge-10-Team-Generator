const Employee = require('../lib/Employee.js')

class Engineer extends Employee {
  constructor(name, email, role, gitHub ='') {
    super(name, email, role);
    this.gitHub = gitHub;
  }

  getgitHub() {
    return this.gitHub;
  };
};
module.exports = Engineer;