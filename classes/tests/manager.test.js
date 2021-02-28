const Manager = require("../manager")

const name = "Ryan Royalty";
const id = 1;
const email = "rroyalty@gmail.com";
const office = "101-A";
const newManager = new Manager(office, name, id, email);

test("Can create new manager.", () => {
    expect(newManager.office).toBe("101-A");
    expect(newManager.name).toBe("Ryan Royalty");
    expect(newManager.email).toBe("rroyalty@gmail.com");
    expect(newManager.id).toBe(1);
    })

test("Can call getOffice method.", () => {
    expect(newManager.getOffice()).toBe("101-A");
    })

test("Can call getClass method.", () => {
    expect(newManager.getClass()).toBe("Manager");
    })