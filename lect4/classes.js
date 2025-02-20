// simple example of class 
// class Person{
//     name:string
//     age:number
//     constructor(name:string,age:number){
//         this.name=name
//         this.age=age
//     }
//     greet():void{
//         console.log(`the name of person is ${this.name} and age is ${this.age}`);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     }
// }
// const p1=new Person("asmit",45)
// console.log(p1.name)
// p1.greet()
// const CopyGreet={
//     greet:()=>p1.greet()
// }
// console.log(CopyGreet.greet());
// 3. Getters and Setters
// Agar hum kisi property ko read ya modify karna chahein controlled tarike se, to get aur set methods ka use karte hain.
// class Car{
//     public brand:string
//     private engienNumber:string
//     protected speed:number
//     constructor(brand:string,engienNumber:string,speed:number){
//         this.brand=brand
//         this.engienNumber=engienNumber
//         this.speed=speed
//     }
//     public Display():void{
//          console.log(`brand of car is ${this.brand} && speed is ${this.speed}`);
//     }
//    // getter and setter for access private members
//    public getSecrate():string{
//     return this.engienNumber
//    }
//    public setSecret(val:string):void{
//       this.engienNumber=val
//    }
// }
// let newCar=new Car("benz","etrt5",5677)
// newCar.Display()
// console.log(newCar.getSecrate())
// newCar.setSecret("sdfdgfgfb")
// console.log(newCar.getSecrate())
// inheritence
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " make a sound"));
    };
    return Animal;
}());
var Dogs = /** @class */ (function (_super) {
    __extends(Dogs, _super);
    function Dogs(name) {
        return _super.call(this, name) || this;
    }
    Dogs.prototype.speak = function () {
        console.log("".concat(this.name, " is bark"));
    };
    return Dogs;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.speak = function () {
        console.log("".concat(this.name, " is meaw"));
    };
    return Cat;
}(Animal));
var dog = new Dogs("black dog");
dog.speak();
var cat = new Cat("cati");
cat.speak();
