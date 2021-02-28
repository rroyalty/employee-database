const Employee = require("../employee")

const name = "Ryan Royalty";
const id = 1;
const email = "rroyalty@gmail.com";
const newEmployee = new Employee(name, id, email);

test("Can create new employee.", () => {
    expect(newEmployee.name).toBe("Ryan Royalty");
    expect(newEmployee.email).toBe("rroyalty@gmail.com");
    expect(newEmployee.id).toBe(1);
    })

test("Can call getName method.", () => {
    expect(newEmployee.getName()).toBe("Ryan Royalty");
    })

test("Can call getID method.", () => {
    expect(newEmployee.getID()).toBe(1);
    })

test("Can call getEmail method.", () => {
    expect(newEmployee.getEmail()).toBe("rroyalty@gmail.com");
    })

test("Can call getClass method.", () => {
    expect(newEmployee.getClass()).toBe("Employee");
    })