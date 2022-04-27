const Manager = require("../lib/Manager");

describe("Manager class", () => {
  it("should return the employee role when called", () => {
    const newEmployee = new Manager("John");

    expect(newEmployee.getRole()).toBe("Manager");
  });
});
