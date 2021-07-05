var id = 1;

class Employee {
  constructor(name = '', email = '', role = '') {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    id++;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Employee;