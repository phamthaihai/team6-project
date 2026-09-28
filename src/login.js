function login(email, password, users) {
    if (email in users && users[email] === password) {
        return true;
    }
    return false;
}

module.exports = { login };