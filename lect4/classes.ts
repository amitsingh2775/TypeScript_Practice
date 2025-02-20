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

class Animal{
    name:string
    constructor(name:string){
        this.name=name
    }

   speak():void{
      console.log(`${this.name} make a sound`);
      
   }
}

class Dogs extends Animal{
    constructor(name:string){
        super(name)
    }
    speak(): void {
         console.log(`${this.name} is bark`);
         
    }
}
class Cat extends Animal{
     constructor(name:string){
        super(name)
     }
     speak(): void {
         console.log(`${this.name} is meaw`);
         
     }
}

let dog=new Dogs("black dog")
dog.speak()
let cat=new Cat("cati")
cat.speak()