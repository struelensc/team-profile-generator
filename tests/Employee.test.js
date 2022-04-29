const Employee = require("../lib/Employee");

describe("Employee class", () => {
  it("should return the employee name when called", () => {
    const name = "John";

    const newEmployee = new Employee(name);

    expect(newEmployee.getName()).toBe("John");
  });

  it("should return the employee id when called", () => {
    const id = 36;

    const newEmployee = new Employee("John", id);

    expect(newEmployee.getId()).toBe(36);
  });

  it("should return the employee email when called", () => {
    const email = "abc@email.com";

    const newEmployee = new Employee("John", 36, email);

    expect(newEmployee.getEmail()).toBe("abc@email.com");
  });

  it("should return the employee role when called", () => {
    const newEmployee = new Employee("John", 36, "abc@email.com");

    expect(newEmployee.getRole()).toBe("Employee");
  });
});
