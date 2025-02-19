// Functions and Return Types in TypeScript
// TypeScript mein function ka use hum logic likhne ke liye karte hain. Isme hum input parameters ka type aur output (return) ka type define kar sakte hain. Yeh type safety ensure karta hai aur galtiyon ko pakadta hai
// .
// eg if you are adding two number then the return type of this function alwyess be the number
// function add(n1:number,n2:number):number{
//     return n1+n2
// }
// console.log(add(3,5));
// void type
function greet(name) {
    console.log("hii ".concat(name));
}
greet("amit");
// good practice
function add(n1, n2) {
    return n1 + n2;
}
var combineFunction;
// parameter ke basis per tun decide kar sakte ho ki kis functon main kon sa functon assing kar sakte ho
combineFunction = add;
var val = combineFunction(5, 6);
console.log(val);
// function with call back function
function Print(num1, num2, cb) {
    var val = num1 + num2;
    cb(val);
}
Print(45, 67, function (res) {
    console.log("result is ", res);
});
