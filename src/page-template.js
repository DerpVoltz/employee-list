function writeHtml(employees) {
    return `
    <!DOCTYPE html>
    <html lang="eng">
        <head>
            <meta charset="UTF-8" />
            <title>Team List</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script src="https://kit.fontawesome.com/15d416856d.js" crossorigin="anonymous"></script>
        </head>
        <body>
            <header class="d-flex page-header justify-content-center">
                <h1 class="m-4 text-light">My Team</h1>
            </header>
            <div class="container team-container">
                <div class="row m-3 justify-content-center p-0">
                    ${employeeHtml(employees)}
                </div>
            </div>
        </body>
    </html>`
}

function employeeHtml(employees) {
    let finalHtml = [];
    for (let i = 0; i < employees.length; i++) {
        const name = employees[i].getName();
        const id = employees[i].getId();
        const email = employees[i].getEmail();
        if (employees[i].getRole() === 'Manager') {
            const office = employees[i].getOfficeNumber();
            const newHtml = `
                <div class="col-lg-3 col-md-5 m-2 my-5 p-0">
                    <div class="employee-box">
                        <div class="text-light p-1 title-card">
                            <h2>${name}</h2>
                            <h3><i class="fas fa-mug-hot"></i> Manager</h3>
                        </div>
                        <div>
                            <p class="bg-light border m-0 mt-3 mx-3">ID: ${id}</p>
                            <p class="bg-light border m-0 mx-3">Email: <a href="mailto:${email}">${email}</a></p>
                            <p class="bg-light border m-0 mb-3 mx-3">Office number: ${office}</p>
                        </div>
                    </div>
                </div>`;
            finalHtml.push(newHtml);
        } else if (employees[i].getRole() === 'Engineer') {
            const github = employees[i].getGithub();
            const newHtml = `
                <div class="col-lg-3 col-md-5 m-2 my-5 p-0">
                    <div class="employee-box">
                        <div class="text-light p-1 title-card">
                            <h2>${name}</h2>
                            <h3><i class="fas fa-glasses"></i> Engineer</h3>
                        </div>
                        <div>
                            <p class="bg-light border m-0 mt-3 mx-3">ID: ${id}</p>
                            <p class="bg-light border m-0 mx-3">Email: <a href="mailto:${email}">${email}</a></p>
                            <p class="bg-light border m-0 mb-3 mx-3">GitHub: <a href="https://github.com/${github}/" target="_blank">${github}</a></p>
                        </div>
                </div>
            </div>`;
            finalHtml.push(newHtml);
        } else if (employees[i].getRole() === 'Intern') {
            const school = employees[i].getSchool();
            const newHtml = `
                <div class="col-lg-3 col-md-5 m-2 my-5 p-0">
                    <div class="employee-box">
                        <div class="text-light p-1 title-card">
                            <h2>${name}</h2>
                            <h3><i class="fas fa-user-graduate"></i> Intern</h3>
                        </div>
                        <div>
                            <p class="bg-light border m-0 mt-3 mx-3">ID: ${school}</p>
                            <p class="bg-light border m-0 mx-3">Email: <a href="mailto:${email}">${email}</a></p>
                            <p class="bg-light border m-0 mb-3 mx-3">School: ${school}</p>
                        </div>
                    </div>
                </div>`;
            finalHtml.push(newHtml);
        }
    }
    finalHtml = finalHtml.join('');
    return finalHtml;
}

module.exports = writeHtml;