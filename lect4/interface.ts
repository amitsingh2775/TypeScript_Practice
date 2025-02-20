// TypeScript mein interface kya hai?
// interface ek blueprint hai jo object, class, ya function ke structure ko define karta hai. Iska use hum type-checking ke liye karte hain taaki code safe aur organized rahe.

// 📌 Interface ka Use Case (Kab Use Karte Hain):
// Object Structure Define Karne ke Liye: Kisi object ke properties ka type fix karna.
// Class ke Liye Contract: Class ko enforce karna ki wo kuch specific methods/properties implement kare.
// Function Type Define Karna: Function ke input/output ka structure fix karna.
// Reusable Code: Ek baar interface bana ke use kar sakte ho multiple jagah.


// Q1. Person Interface aur Student Class
// ✅ Task: Ek Person interface banao jisme name, age, aur ek greet() method ho. Use implement karke Student class banao.

// interface PersonInt{
//     name:string,
//     age:number,
//     greet():void
// }

// class Student implements PersonInt{
//    name:string
//    age:number
//    rollNo:number
//    constructor(name:string,age:number,rollNo:number){
//       this.name=name
//       this.age=age
//       this.rollNo=rollNo
//    }
//    greet(): void {
//        console.log(`the name of student is ${this.name} and rollNo ${this.rollNo}`);
       
//    }

// }
// class Teacher implements PersonInt{
//     name:string
//     age: number
//     subject:string
//     constructor(name:string,age:number,subject:string){
//         this.name=name
//         this.age=age
//         this.subject=subject
//     }
//     greet(): void {
//         console.log(`teacher name is ${this.name} and subject ${this.subject}`);
        
//     }
// }

// const stu=new Student("amit",23,35456)
// const tec=new Teacher("ms.shina",45,"math")
// stu.greet()
// tec.greet()

// Task: Ek Product interface banao jisme name, price, aur discount() method ho. Ek Electronic class implement karo jisme alag-alag products ka discount calculate ho.

interface Products{
    name:string,
    price:number,
    discount(rate:number):number
}

class Electronic implements Products{
     name: string
     price: number
     constructor(name:string,price:number){
        this.name=name
        this.price=price
     }
     discount(rate: number): number {
         return this.price-(this.price*rate)/100
     }
}

let leptop=new Electronic("leptop",4567)
let dic=leptop.discount(10)
console.log(dic);
