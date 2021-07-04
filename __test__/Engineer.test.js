const Engineer = require('../lib/Engineer.js')

test('creates engineer object', () => {
  const engineer = new Engineer('Fulano', 'fulanosutano@gmail.com', 'Engineer', 'FulanoSutanoGit');
  expect(engineer.email).toBe('fulanosutano@gmail.com');
  expect(engineer.gitHub).toBe('FulanoSutanoGit');
  expect(engineer.role).toBe('Engineer');
  expect(engineer.name).toBe('Fulano');
});

test('gets the Engineers Git', () => {
  const engineer = new Engineer('Fulano', 'fulanosutano@gmail.com', 'Engineer', 'FulanoSutanoGit');
  expect(engineer.getgitHub()).toBe('FulanoSutanoGit');
});