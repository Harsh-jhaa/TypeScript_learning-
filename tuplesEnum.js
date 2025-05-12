var UserInfo;
// The first element is a string, the second is a number, and the third is a boolean. Except for this order , all are invalid
UserInfo = ['John', 25, true];
// UserInfo = [25, 'John', true] // Error: Type 'number' is not assignable to type 'string'.
var userRole;
(function (userRole) {
    userRole[userRole["admin"] = 0] = "admin";
    userRole[userRole["user"] = 1] = "user";
    userRole[userRole["guest"] = 2] = "guest";
    userRole[userRole["superAdmin"] = 3] = "superAdmin";
})(userRole || (userRole = {}));
var role = userRole.superAdmin;
