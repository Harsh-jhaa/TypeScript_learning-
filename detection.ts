function detectype(val: number | string) {
  if (typeof val === 'string') {
    return val.toLowerCase();
  }
  return val + 3;
}

function detectype2(val: number | null) {
  if (!val) {
    console.log('pLease provide a number');
    return;
  }
  return val + 3;
}

interface User {
  name: string;
  age: number;
}

interface Admin {
  name: string;
  age: number;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ('isAdmin' in account) {
    return account.isAdmin;
  }
  return false;
}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    // to check if something is an instance of a class
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return 'fish food';
  } else {
    pet;
    return 'bird food';
  }
}


