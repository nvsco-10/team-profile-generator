class Employee {
    constructor(name, id, email) {
        if (!name || name !== "string") {
            throw new Error("Please enter a valid name.");
        }
        if (!id) {
            throw new Error("Please enter a valid id.");
        }
        if (!email) {
            throw new Error("Please enter an email address.");
        }

        this.name = name,
        this.id = id,
        this.email = email
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;