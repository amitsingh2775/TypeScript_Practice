// TypeScript mein interface kya hai?
// interface ek blueprint hai jo object, class, ya function ke structure ko define karta hai. Iska use hum type-checking ke liye karte hain taaki code safe aur organized rahe.
var Electronic = /** @class */ (function () {
    function Electronic(name, price) {
        this.name = name;
        this.price = price;
    }
    Electronic.prototype.discount = function (rate) {
        return this.price - (this.price * rate) / 100;
    };
    return Electronic;
}());
var leptop = new Electronic("leptop", 4567);
var dic = leptop.discount(10);
console.log(dic);
