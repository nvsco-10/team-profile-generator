const Intern = require('../lib/intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an Intern object given a name, id, email, and school name.", () => {
            const obj = new Intern("Gary", 5, "gary@email.com", "SMU");

            expect(obj instanceof Intern).toEqual(true);
        })
    })

    describe("getSchool", () => {
        it("should return the intern's school", () => {
            const school = "SMU";
            const intern = new Intern("Gary", 5, "gary@email.com", school);
            
            expect(intern.getSchool()).toEqual(school);
        })
    })

    describe("getRole", () => {
        it("should return the role of Intern", () => {
            const intern = new Intern("Gary", 5, "gary@email.com", "SMU");
            
            expect(intern.getRole()).toEqual("Intern");
        })
    })

})