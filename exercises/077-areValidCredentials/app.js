function areValidCredentials(name, password) {
    if (name.length > 3 && password.length >= 8) {
        return true;
    }
    return false;
}
let result = areValidCredentials("AliRahimi", "mylongestpassword")
console.log(result)