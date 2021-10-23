export const validateEmailId = (emailId) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailId).toLowerCase());
}

export const validatePassword = (password) => {
    if (password.length < 6) {
        return "Your password must be at least 6 characters" 
    }else if (password.search(/[a-z]/i) < 0) {
        return "Your password must contain at least one letter."
    }else if (password.search(/[0-9]/) < 0) {
        return "Your password must contain at least one digit."
    }else{
        return true
    }
}