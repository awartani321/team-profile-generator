const Employee = require("../lib/Employee");

test("creates an employee object with attributes", () => {
	const employee = new Employee("John", "1", "john@gmail.com");

	expect(employee.name).toBe("John");
	expect(employee.id).toBe("1");
	expect(employee.email).toBe("john@gmail.com");
});

test("check methods", () => {
	const employee = new Employee("John", "1", "john@gmail.com");

	expect(employee.getName()).toBe("John");
	expect(employee.getId()).toBe("1");
	expect(employee.getEmail()).toBe("john@gmail.com");
	expect(employee.getRole()).toBe("Employee");
});
