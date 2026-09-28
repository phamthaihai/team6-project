function login(email, password, users) {
    if (email && users[email] === password) {
        return true;
    }
    return false;
}

module.exports = { login };