const Intern = require("../intern")

const name = "Ryan Royalty";
const id = 1;
const email = "rroyalty@gmail.com";
const school = "UMass";
const newIntern = new Intern(school, name, id, email);

test("Can create new Intern.", () => {
    expect(newIntern.school).toBe("UMass");
    expect(newIntern.name).toBe("Ryan Royalty");
    expect(newIntern.email).toBe("rroyalty@gmail.com");
    expect(newIntern.id).toBe(1);
    })

test("Can call getSchool method.", () => {
    expect(newIntern.getSchool()).toBe("UMass");
    })

test("Can call getClass method.", () => {
    expect(newIntern.getClass()).toBe("Intern");
    })