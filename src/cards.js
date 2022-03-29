function managerCard(name, id, email, number) {
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
                    <li class="list-group-item"><b>Office Number: </b>${number}</li>
                </ul>
            </div>
        </div>
    </div>
    `
}

function engineerCard(name, id, email, github) {
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

function internCard(name, id, email, school) {
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

module.exports = { managerCard, engineerCard, internCard };