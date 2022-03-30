function validateEmail(email) {
    const validEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);

    if (validEmail) {
        return true;
    } else {
        return "Please enter a valid email address.";
    }
}

// source regex email check: https://stackoverflow.com/questions/65189877/how-can-i-validate-that-a-user-input-their-email-when-using-inquirer-npm

function validateName(input) {
    if (input) {
        return true;
    } else {
        return "Please enter a name.";
    }
}

function validateNum(input) {
    if (!isNaN(input)) {
        return true;
    } else {
        return "Please enter a number.";
    }
}

function validateInput(input) {
    if (input) {
        return true;
    } else {
        return "Please enter a value.";
    }
}

module.exports = { validateEmail, validateName, validateNum, validateInput };