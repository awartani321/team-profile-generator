const Manager = require("../lib/Manager");

test("creates an manager object with attributes", () => {
	const manager = new Manager("John", "1", "john@gmail.com", "Wall");

	expect(manager.name).toBe("John");
	expect(manager.id).toBe("1");
	expect(manager.email).toBe("john@gmail.com");
	expect(manager.officeNumber).toBe("Wall");
});

test("Check methods", () => {
	const manager = new Manager("John", "1", "john@gmail.com", "Wall");

	expect(manager.getName()).toBe("John");
	expect(manager.getId()).toBe("1");
	expect(manager.getEmail()).toBe("john@gmail.com");
	expect(manager.getRole()).toBe("Manager");
});