const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

async function createManager() {
    const questions = [
        {
            type: "input",
            name: "name",
            message: "What is the team manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the team manager's employee id?"
        },
        {
            type: "email",
            name: "email",
            message: "What is the team manager's email address?"
        },
        {
            type: "input",
            name: "officenum",
            message: "What is your the team manager's office number?"
        },

    ];

    const managerProfile = await inquirer.prompt(questions);
    
    console.log(managerProfile)
    return managerProfile;

}

async function createEngineer() {
    const questions = [
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's employee id?"
        },
        {
            type: "email",
            name: "email",
            message: "What is the engineer's email address?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?"
        },

    ];

    const engineerProfile = await inquirer.prompt(questions);
    
    console.log(engineerProfile)
    return engineerProfile;
}

async function createIntern() {
    const questions = [
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's employee id?"
        },
        {
            type: "email",
            name: "email",
            message: "What is the intern's email address?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?"
        },

    ];

    const internProfile = await inquirer.prompt(questions);
    
    console.log(internProfile)
    return internProfile;
}



