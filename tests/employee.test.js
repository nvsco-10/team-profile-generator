const Employee = require('../lib/employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an Employee object given a name, id, and email.", () => {
            const obj = new Employee("Gary", 5, "gary@email.com");

            expect(obj instanceof Employee).toEqual(true);
        })
    })

    describe("getName", () => {
        it("should return the employee's name", () => {
            const name = "Gary"
            const employee = new Employee(name, 5, "gary@email.com");
            
            expect(employee.getName()).toEqual(name);
        })
    })

    describe("getId", () => {
        it("should return the employee's Id", () => {
            const id = 5;
            const employee = new Employee("Gary", id, "gary@email.com");
            
            expect(employee.getId()).toEqual(id);
        })
    })

    describe("getEmail", () => {
        it("should return the employee's email address", () => {
            const email = "gary@email.com";
            const employee = new Employee("Gary", 5, email);
            
            expect(employee.getEmail()).toEqual(email);
        })
    })

    describe("getRole", () => {
        it("should return the employee's role", () => {
            const employee = new Employee("Gary", 5, "gary@email.com");
            
            expect(employee.getRole()).toEqual("Employee");
        })
    })

})