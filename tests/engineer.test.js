const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an Engineer object given a name, id, email, and github username.", () => {
            const obj = new Engineer("Gary", 5, "gary@email.com", "garyyy");

            expect(obj instanceof Engineer).toEqual(true);
        })
    })

    describe("getRole", () => {
        it("should return the role of Engineer", () => {
            const engineer = new Engineer("Gary", 5, "gary@email.com", "garyyy");
            
            expect(engineer.getRole()).toEqual("Engineer");
        })
    })

})