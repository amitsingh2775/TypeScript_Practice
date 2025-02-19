function sum(a, b, flag) {
    if (flag) {
        return a + b;
    }
    else {
        return "there is nothing";
    }
}
var a = 4;
var b = 9;
var flag = false;
console.log(sum(a, b, flag));
