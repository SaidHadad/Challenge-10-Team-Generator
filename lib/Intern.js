const Employee = require('../lib/Employee.js')

class Intern extends Employee {
  constructor(name, email, role, school ='') {
    super(name, email, role);
    this.school = school;
  }

  getSchool() {
    return this.school;
  };
};
module.exports = Intern;