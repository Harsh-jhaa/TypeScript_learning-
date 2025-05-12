let UserInfo: [string, number, boolean];

// The first element is a string, the second is a number, and the third is a boolean. Except for this order , all are invalid
UserInfo = ['John', 25, true];
// UserInfo = [25, 'John', true] // Error: Type 'number' is not assignable to type 'string'.

enum userRole {
  admin,
  user,
  guest,
  superAdmin,
}

let role = userRole.superAdmin;
