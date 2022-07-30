const Intern = require("../lib/Intern");

test("creates an intern object with attributes", () => {
	const intern = new Intern("John", "1", "john@gmail.com", "Boston School");

	expect(intern.name).toBe("John");
	expect(intern.id).toBe("1");
	expect(intern.email).toBe("john@gmail.com");
	expect(intern.school).toBe("Boston School");
});

test("Check methods", () => {
	const intern = new Intern("John", "1", "john@gmail.com", "Boston School");

	expect(intern.getName()).toBe("John");
	expect(intern.getId()).toBe("1");
	expect(intern.getEmail()).toBe("john@gmail.com");
	expect(intern.getSchool()).toBe("Boston School");
	expect(intern.getRole()).toBe("Intern");
});