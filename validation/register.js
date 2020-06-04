const Validator = require("validator");
const isEmpty = require("is-empty");


module.exports = function validateRegisterInput(data) {
    let err = {};
    
    // Convert empty fields to an empty string so we can use validator functions
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
    // Name checks
    if (Validator.isEmpty(data.name)) {
        err.name = "Name is required";
    }
    // Email checks
    if (Validator.isEmpty(data.email)) {
        err.email = "Email is required";
    } else if (!Validator.isEmail(data.email)) {
        err.email = "Email is invalid";
    }
    // Password checks
    if (Validator.isEmpty(data.password)) {
        err.password = "Password is required";
    }
    if (Validator.isEmpty(data.password2)) {
        err.password2 = "Confirm password is required";
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        err.password = "Password must be at least 6 characters";
    }
    if (!Validator.equals(data.password, data.password2)) {
        err.password2 = "Passwords must match";
    }
    return {
        err,
        isValid: isEmpty(err)
    };
};