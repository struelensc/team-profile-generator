const Intern = require("../lib/Intern");

describe("Intern class", () => {
  it("should return the employee school when called", () => {
    const name = "John";
    const id = 36;
    const email = "abc@email.com";
    const school = "best school";

    const newEmployee = new Intern(name, id, email, school);

    expect(newEmployee.getSchool()).toBe("best school");
  });

  it("should return the employee role when called", () => {
    const newEmployee = new Intern("John");

    expect(newEmployee.getRole()).toBe("Intern");
  });
});
