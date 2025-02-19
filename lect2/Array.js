// in this file all about Array in Ts with  practice
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 1. create the array of number type
var nums = [1, 3, 56];
// 2. Array of string type
var arr = ["amit", "ashish"];
// 3. array of Boolean type
var BoolArray = [true, false, false, true];
// medium leve 
// array with Array<Type>
var ab = [1, 3, 5];
var cb = ["am", "arg"];
// Array of mixtype
var mixArray = [1, 3, 4, "amf", "d", 1];
var people = [
    { name: "amit", age: 34 },
    { name: "amit", age: 34 },
    { name: "amit", age: 34 }
];
// Array manupulation
var Users = ["amit", "ashish"];
// add new user
Users.push("uttam");
// after add
console.log("after add", Users);
// read value
console.log("read value", Users[0]);
Users.splice(0, 1);
console.log("after delete", Users);
var product = [
    { id: 1, name: "face-wash", price: 230 },
    { id: 2, name: "face-cream", price: 400 }
];
// add new product
product.push({ id: 3, name: "body-wash", price: 239 });
console.log("after the add product: ", product);
// find the product by id if id =2
for (var _i = 0, product_1 = product; _i < product_1.length; _i++) {
    var p1 = product_1[_i];
    if (p1.id === 2) {
        console.log(p1);
        break;
    }
}
// update price of the prodcut which id is 1
var mewproduct = product.map(function (p) {
    return p.id == 1 ? __assign(__assign({}, p), { price: 345 }) : p;
});
console.log("updated price ", mewproduct);
// delete the prodct of their id will be 3
product = product.filter(function (p) { return p.id != 3; });
console.log("after filter", product);
// split into another arry
function chunArray(arr, size) {
    var res = [];
    for (var i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size));
    }
    return res;
}
console.log(chunArray([1, 2, 3, 4, 5, 5], 2));
