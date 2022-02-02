const Engineer = require('../lib/Engineer');

test('creates a new engineer object', () => {
    const engineer = new Engineer('John', '1', 'john@gmail.com', 'JohnVoltz');

    expect(engineer.name).toBe('John');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('john@gmail.com');
    expect(engineer.github).toBe('JohnVoltz');
});

test('getGithub returns github username', () => {
    const engineer = new Engineer('John', '1', 'john@gmail.com', 'JohnVoltz');

    expect(engineer.getGithub()).toBe('JohnVoltz');
});

test('getRole returns Engineer', () => {
    const engineer = new Engineer('John', '1', 'john@gmail.com', 'JohnVoltz');

    expect(engineer.getRole()).toBe('Engineer');
});