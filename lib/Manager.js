const Employee = require('../lib/Employee.js')

class Manager extends Employee {
  constructor(name, email, role, office ='') {
    super(name, email, role);
    this.office = office;
  }

  getOffice () {
    return this.office;
  }
}
module.exports = Manager;