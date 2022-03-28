const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamMembers = [];

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
    const { name, id, email, officenum} = managerProfile;
    
    console.log(managerProfile);
    
    const manager = new Manager(name, id, email, officenum);
    teamMembers.push(manager);

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
    
    const { name, id, email, github} = engineerProfile;
    
    console.log(engineerProfile);
    
    const engineer = new Engineer(name, id, email, github);
    teamMembers.push(engineer);

    addEmployee();
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
    
    const { name, id, email, school} = internProfile;
    
    console.log(internProfile);
    
    const intern = new Intern(name, id, email, school);
    teamMembers.push(intern);

    addEmployee();
}

async function addEmployee() {
    const option = [
        {
            type: "list",
            name: "role",
            message: "Select an employee to add:",
            choices: [
                "Engineer",
                "Intern",
                "I don't have any employees to add"
            ]
        }
    ]
    const chooseEmployee = await inquirer.prompt(option);

    if (chooseEmployee.role === "Engineer") {
        createEngineer();
    } else if (chooseEmployee.role === "Intern") {
        createIntern();
    } else {
        console.log("All team members have been added.")
        return;
    }
}

async function getTeamProfile() {
    const manager = await createManager();
    const employees = await addEmployee();

}

getTeamProfile();

