const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your team managers name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their employee id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email?'
    },
    {
        type: 'input',
        name: 'email',
        message : 'What is their office number?'
    },
    {
        type: 'confirm',
        name: 'newEmployee',
        message: 'Do you want to add another employee?'
    }
]

function manager() {
    inquirer.prompt(managerQuestions).then(data => {
        console.log(data);
    })
}

manager();