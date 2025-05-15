function detectype(val) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }
    return val + 3;
}
function detectype2(val) {
    if (!val) {
        console.log('pLease provide a number');
        return;
    }
    return val + 3;
}
function isAdminAccount(account) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
    return false;
}
function logValue(x) {
    if (x instanceof Date) {
        // to check if something is an instance of a class
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return 'fish food';
    }
    else {
        pet;
        return 'bird food';
    }
}
