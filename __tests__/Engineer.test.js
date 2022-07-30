const Engineer = require("../lib/Engineer");

test("creates an engineer object with attributes", () => {
	const engineer = new Engineer("John", "1", "john@gmail.com", "testHub");

	expect(engineer.name).toBe("John");
	expect(engineer.id).toBe("1");
	expect(engineer.email).toBe("john@gmail.com");
	expect(engineer.gitHub).toBe("testHub");
});

test("Check methods", () => {
	const engineer = new Engineer("John", "1", "john@gmail.com", "testHub");

	expect(engineer.getName()).toBe("John");
	expect(engineer.getId()).toBe("1");
	expect(engineer.getEmail()).toBe("john@gmail.com");
	expect(engineer.getRole()).toBe("Engineer");
	expect(engineer.getGitHub()).toBe("testHub");
});
