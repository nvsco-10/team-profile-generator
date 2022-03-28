const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {

        super(name, id, email)

        this.github = github
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;

const Eng = new Engineer("Gary", 5, "gary@email.com", "garyalmes");

console.log(Eng.getGithub());
console.log(Eng.getRole());
console.log(Eng.getName());