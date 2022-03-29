function managerCard(manager) {
    const { name, id, email, officeNumber} = manager;

    return `
    <div class="col col-lg-3 col-md-6">
        <div class="card">
            <div class="card-header bg-dark text-white py-4 flex-row">
                <div class="header-box">
                    <i class="user-icon fa-solid fa-user-astronaut"></i>
                </div>
                <div class="header-box mx-4">
                    <h3 class="mb-0">${name}</h3>
                    <p class="role mb-0">Manager</p>
                </div>  
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush my-4">
                    <li class="list-group-item"><b>ID: </b>${id}</li>
                    <li class="list-group-item"><b>Email: </b><a             href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item"><b>Office Number: </b>${officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>
    `
}

function engineerCard(engineer) {
    const { name, id, email, github} = engineer;

    return `
    <div class="col col-lg-3 col-md-6">
        <div class="card">
            <div class="card-header bg-dark text-white py-4 flex-row">
                <div class="header-box">
                    <i class="user-icon fa-solid fa-user-astronaut"></i>
                </div>
                <div class="header-box mx-4">
                    <h3 class="mb-0">${name}</h3>
                    <p class="role mb-0">Engineer</p>
                </div>  
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush my-4">
                    <li class="list-group-item"><b>ID: </b>${id}</li>
                    <li class="list-group-item"><b>Email: </b><a             href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item"><b>GitHub: </b><a href="https://github.com/${github}" target="_blank">${github}</a></li>
                </ul>
            </div>
        </div>
    </div>
    `
}

function internCard(intern) {
    const { name, id, email, school} = intern;

    return `
    <div class="col col-lg-3 col-md-6">
        <div class="card">
            <div class="card-header bg-dark text-white py-4 flex-row">
                <div class="header-box">
                    <i class="user-icon fa-solid fa-user-astronaut"></i>
                </div>
                <div class="header-box mx-4">
                    <h3 class="mb-0">${name}</h3>
                    <p class="role mb-0">Intern</p>
                </div>  
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush my-4">
                    <li class="list-group-item"><b>ID: </b>${id}</li>
                    <li class="list-group-item"><b>Email: </b><a             href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item"><b>School: </b>${school}</li>
                </ul>
            </div>
        </div>
    </div>
    `
}

function htmlTemplate(cards) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <script src="https://kit.fontawesome.com/1d6f3aeade.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header class="bg-dark">
        <h1>My Team</h1>
    </header>

    <main class="container my-4">

        <div class="row">
            ${cards}
        </div>
        
    </main>
    
</body>
</html>
    `
}

module.exports = { managerCard, engineerCard, internCard, htmlTemplate };