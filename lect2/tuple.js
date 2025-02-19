// all about tuble
// simple how to declear tuble
// usecase->if you need to store the values of diferent types then you can use tupple
var users;
users = ["amit", 39];
console.log(users);
// tuples with leble
var newUser;
newUser = [1, "amit", true];
console.log(newUser);
// tuple in function which is return name and age
function getUsers() {
    return ["ashish", 45];
}
var _a = getUsers(), name1 = _a[0], age = _a[1];
console.log(name1, age);
var emp = [
    ["amit", 345],
    ["sdg", 45]
];
emp.forEach(function (val) { return console.log(val[0], val[1]); });
function swap(a, b) {
    return [b, a];
}
var _b = swap(8, 5), val1 = _b[0], val2 = _b[1];
console.log("val1->", val1, val2);
