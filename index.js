const fs = require('fs/promises');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const writeHtml = require('./src/page-template');
const employees = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your team managers name?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            }
            console.log('Please input name.');
            return false;
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their employee ID?',
        validate: idInput => {
            if(idInput) {
                return true;
            }
            console.log('Please input ID.');
            return false;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email?',
        validate: emailInput => {
            if(emailInput) {
                return true;
            }
            console.log('Please input email.');
            return false;
        }
    },
    {
        type: 'input',
        name: 'office',
        message : 'What is their office number?',
        validate: officeInput => {
            if(officeInput) {
                return true;
            }
            console.log('Please enter office number.');
            return false;
        }
    },
    {
        type: 'confirm',
        name: 'newEmployee',
        message: 'Do you want to add another employee?'
    }
]

const roleQuestion = [
    {
        type: 'list',
        name: 'role',
        message: 'What is their postition?',
        choices: ['Engineer', 'Intern']
    },
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is their name?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            }
            console.log('Please input name.');
            return false;
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is there ID?',
        validate: idInput => {
            if(idInput) {
                return true;
            }
            console.log('Please input ID.');
            return false;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email?',
        validate: emailInput => {
            if(emailInput) {
                return true;
            }
            console.log('Please input email.');
            return false;
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is their GitHub username?',
        validate: githubInput => {
            if(githubInput) {
                return true;
            }
            console.log('Please input GitHub username.')
            return false;
        }
    },
    {
        type: 'confirm',
        name: 'newEmployee',
        message: 'Do you want to add another employee?'
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is their name?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            }
            console.log('Please input name.');
            return false;
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is there ID?',
        validate: idInput => {
            if(idInput) {
                return true;
            }
            console.log('Please input ID.');
            return false;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email?',
        validate: emailInput => {
            if(emailInput) {
                return true;
            }
            console.log('Please input email.');
            return false;
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is their school?',
        validate: schoolInput => {
            if(schoolInput) {
                return true;
            }
            console.log('Please input school.');
            return false;
        }
    },
    {
        type: 'confirm',
        name: 'newEmployee',
        message: 'Do you want to add another employee?'
    }
]


function nextEmployee() {
    inquirer.prompt(roleQuestion).then(data => {
        if(data.role === 'Engineer') {
            inquirer.prompt(engineerQuestions).then(data => {
                console.log(data);
                const engineer = new Engineer(data.name, data.id, data.email, data.github);
                employees.push(engineer);
                if (data.newEmployee) {
                    nextEmployee(data);
                } else {
                    newFiles();
                }
            });
        } else {
            inquirer.prompt(internQuestions).then(data => {
                console.log(data);
                const intern = new Intern(data.name, data.id, data.email, data.school)
                employees.push(intern);
                if (data.newEmployee) {
                    nextEmployee(data);
                } else {
                    newFiles();
                }
            });
        }
    });
}

function startScript() {
    inquirer.prompt(managerQuestions).then(data => {
        const manager = new Manager(data.name, data.id, data.email, data.office);
        employees.push(manager);
        if(data.newEmployee) {
            nextEmployee();
        } else {
            newFiles();
        }
    });
}

function newFiles() {
    fs.writeFile('./dist/index.html', writeHtml(employees)).then(err => {
        if (err) {
            console.log('There was a problem with writing HTML');
        }
    });
    fs.copyFile('./src/style.css', './dist/style.css').then(err => {
        if (err) {
            console.log('There was a problem with copyin CSS.')
        }
    });
    console.log('Check the "dist" folder for your new files!');
}

startScript();