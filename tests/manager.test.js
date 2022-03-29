const Manager = require('../lib/manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it("should return a Manager object given a name, id, email, and office number.", () => {
            const obj = new Manager("Gary", 5, "gary@email.com", 12);

            expect(obj instanceof Manager).toEqual(true);
        })
    })

    describe("getRole", () => {
        it("should return the role of Manager", () => {
            const manager = new Manager("Gary", 5, "gary@email.com", 12);
            
            expect(manager.getRole()).toEqual("Manager");
        })
    })

})