function validateEmail(email) {
    const validEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);

    if (validEmail) {
        return true;
    } else {
        return "Please enter a valid email address.";
    }
}

// source regex email check: https://stackoverflow.com/questions/65189877/how-can-i-validate-that-a-user-input-their-email-when-using-inquirer-npm

function validateString(name) {
    if (typeof name === "string" || name) {
        return true;
    } else {
        "Please enter a name.";
    }
}

module.exports = { validateEmail, validateString };