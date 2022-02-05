function writeHtml(employees) {
    return `
    <!DOCTYPE html>
    <html lang="eng">
        <head>
            <meta charset="UTF-8" />
            <title>Employee List</title>
            <link rel="stylesheet" href="./style.css" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>
            <header class="d-flex col-12 bg-danger page-header justify-content-center">
                <h1 class="m-4">My Team</h1>
            </header>
            <div class="container">
                <div class="row">
                    ${employeeHtml(employees)}
                </div>
            </div>
        </body>`
}

function employeeHtml(employees) {
    const finalHtml = [];
    for (let i = 0; i < employees.length; i++) {
        const name = employees[i].getName();
        const id = employees[i].getId();
        const email = employees[i].getEmail();
        if (employees[i].getRole() === 'Manager') {
            const office = employees[i].getOfficeNumber();
            const newHtml = `
            <div class="col-4 m-4">
                <div class="employee-box">
                    <div class="bg-primary p-1 title-card">
                        <h2>${name}</h2>
                        <h3>Manager</h3>
                    </div>
                    <div class="border">
                        <p class="border m-0 mt-3 mx-3">ID: ${id}</p>
                        <p class="border m-0 mx-3">Email: ${email}</p>
                        <p class="border m-0 mb-3 mx-3">Office number: ${office}</p>
                    </div>
                </div>
            </div>`;
            finalHtml.push(newHtml);
        } else if (employees[i].getRole() === 'Engineer') {
            const github = employees[i].getGithub();
            const newHtml = `
            <div class="col-4 m-4">
                <div class="employee-box">
                    <div class="bg-primary p-1 title-card">
                        <h2>${name}</h2>
                        <h3>Engineer</h3>
                    </div>
                    <div class="border">
                        <p class="border m-0 mt-3 mx-3">ID: ${id}</p>
                        <p class="border m-0 mx-3">Email: ${email}</p>
                        <p class="border m-0 mb-3 mx-3">GitHub: ${github}</p>
                    </div>
                </div>
            </div>`;
            finalHtml.push(newHtml);
        } else if (employees[i].getRole() === 'Intern') {
            const school = employees[i].getSchool();
            const newHtml = `
            <div class="col-4 m-4">
                <div class="employee-box">
                    <div class="bg-primary p-1 title-card">
                        <h2>${name}</h2>
                        <h3>Intern</h3>
                    </div>
                    <div class="border">
                        <p class="border m-0 mt-3 mx-3">ID: ${id}</p>
                        <p class="border m-0 mx-3">Email: ${email}</p>
                        <p class="border m-0 mb-3 mx-3">School: ${school}</p>
                    </div>
                </div>
            </div>`;
            finalHtml.push(newHtml);
        }
    }
    finalHtml.join(" ");
    console.log(finalHtml);
    return finalHtml;
}

module.exports = writeHtml;