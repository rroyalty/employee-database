const Engineer = require("../engineer")

const name = "Ryan Royalty";
const id = 1;
const email = "rroyalty@gmail.com";
const github = "rroyalty";
const newEngineer = new Engineer(github, name, id, email);

test("Can create new Engineer.", () => {
    expect(newEngineer.github).toBe("rroyalty");
    expect(newEngineer.name).toBe("Ryan Royalty");
    expect(newEngineer.email).toBe("rroyalty@gmail.com");
    expect(newEngineer.id).toBe(1);
    })

test("Can call getGithub method.", () => {
    expect(newEngineer.getGithub()).toBe("rroyalty");
    })

test("Can call getClass method.", () => {
    expect(newEngineer.getClass()).toBe("Engineer");
    })