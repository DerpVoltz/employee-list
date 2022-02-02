const Manager = require('../lib/Manager');

test('creates new manager object', () => {
    const manager = new Manager('John', '1', 'john@gmail.com', '246');

    expect(manager.name).toBe('John');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('john@gmail.com');
    expect(manager.officeNumber).toBe('246');
});

test('getOfficeNumber returns office number', () => {
    const manager = new Manager('John', '1', 'john@gmail.com', '246');

    expect(manager.getOfficeNumber()).toBe('246');
});

test('getRole returns Manager', () => {
    const manager = new Manager('John', '1', 'john@gmail.com', '246');

    expect(manager.getRole()).toBe('Manager');
});