const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
  const employee = new Employee ('Fulano', 'fulanosutano@gmail.com');
  expect(employee.email).toBe('fulanosutano@gmail.com');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.name).toBe('Fulano');
});

test('gets employee name', () => {
  const employee = new Employee ('Fulano');
  expect(employee.getName()).toBe('Fulano');
});

test('gets employee id', () => {
  const employee = new Employee ();
  expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
  const employee = new Employee ('Fulano','fulanosutano@gmail.com');
  expect(employee.getEmail()).toBe('fulanosutano@gmail.com');
});

test('gets employee role', () => {
  const employee = new Employee ();
  expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});