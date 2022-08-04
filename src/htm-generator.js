const fs = require("fs");

function generateHTML(teamList) {
  console.log(teamList);

  // create dist directory
  try {
    fs.mkdirSync("./dist");
  } catch (e) {}

  // read html file

  var html = fs.readFileSync("./src/template.html");

  var body = "";
  teamList.forEach((row) => {
    body += generateTeamProfile(row);
  });

  html = html.toString().replace("{{{body}}}", body);

  fs.writeFileSync("./dist/team-profile.html", html);

  copyCSSFile();
}

function generateManagerProfile(member) {
  return `
    <div class="card bg-light" style="width: 18rem;">
        <div class="card-header bg-primary">
            <h5 class="card-title">${member.getName()}</h5>
            <h6 class="card-subtitle mb-2"><i class="fa fa-coffee"></i>${member.getRole()}</h6>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${member.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${
                  member.officeNumber
                }</li>
            </ul>
        </div>
    </div>
    `;
}

function generateEngineerProfile(member) {
  return `
    <div class="card bg-light" style="width: 18rem;">
        <div class="card-header bg-primary">
            <h5 class="card-title">${member.getName()}</h5>
            <h6 class="card-subtitle mb-2"><i class="fa-solid fa-glasses"></i>${member.getRole()}</h6>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${member.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${member.getGitHub()}" target="__blank">${member.getGitHub()}</a></li>
            </ul>
        </div>
    </div>
    `;
}

function generateInternProfile(member) {
  return `
    <div class="card bg-light" style="width: 18rem;">
        <div class="card-header bg-primary">
            <h5 class="card-title">${member.getName()}</h5>
            <h6 class="card-subtitle mb-2"><i class="fa fa-graduation-cap "></i>${member.getRole()}</h6>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${member.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${member.getEmail()}">${member.getEmail()}</a></li>
                <li class="list-group-item">School: ${member.getSchool()}</li>
            </ul>
        </div>
    </div>
    `;
}

function generateTeamProfile(member) {
  if (member.getRole() == "Manager") {
    return generateManagerProfile(member);
  }

  if (member.getRole() == "Engineer") {
    return generateEngineerProfile(member);
  }

  if (member.getRole() == "Intern") {
    return generateInternProfile(member);
  }

  return "";
}

function copyCSSFile() {
  fs.copyFileSync("./src/style.css", "./dist/style.css");
}

module.exports = generateHTML;
