const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  it("should return the employee github username when called", () => {
    const name = "John";
    const id = 36;
    const email = "abc@email.com";
    const github = "coolperson";

    const newEmployee = new Engineer(name, id, email, github);

    expect(newEmployee.getGithub()).toBe("coolperson");
  });

  it("should return the employee role when called", () => {
    const newEmployee = new Engineer("John");

    expect(newEmployee.getRole()).toBe("Engineer");
  });
});
