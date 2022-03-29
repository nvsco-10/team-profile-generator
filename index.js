const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const { managerCard, engineerCard, internCard } = require('./src/cards');

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
            message: "What is the team manager's office number?"
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
        const data = await createCards(teamMembers);
        generateHTML(data);
    }

};

function generateHTML(data) {
    const path = "./dist/index.html";

    fs.writeFile(path, data, e => {
        if (e) {
          console.error("write error:  " + error.message);
        } else {
          console.log("Successful Write to " + path);
        }
    })

};

async function createCards(members) {
    const teamCards = [];

    members.forEach(member => {
        const role = member.getRole();
        let card = "";

        if (role === "Manager") {
            card = managerCard(member)
        } else if (role === "Engineer") {
            card = engineerCard(member)
        } else if (role === "Intern") {
            card = internCard(member);
        }

        teamCards.push(card);
    })

   return teamCards.join("");

}

async function getTeamProfile() {
    const manager = await createManager();
    const employees = await addEmployee();

    
    // console.log(data);
}

getTeamProfile();


