// Literal Types in TypeScript:
// Literal types ka matlab hai ki aap kisi variable ya value ko specific values tak restrict kar sakte ho. Ye type safety ko badhata hai aur allowed values ko control karne mein madad karta hai.
var direction;
direction = "left"; // vaild
function printStatus(status) {
    console.log("status is ".concat(status));
}
printStatus("success");
printStatus("error");
function print1(lebel, type) {
    console.log("".concat(lebel, " is ").concat(type));
}
print1("submit", "primary");
function Details(user) {
    console.log(" username is ".concat(user.name, " and skills ").concat(user.skills));
}
var details = { name: "amit", age: 35, skills: ["React", "C++"] };
Details(details);
