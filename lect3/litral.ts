// Literal Types in TypeScript:
// Literal types ka matlab hai ki aap kisi variable ya value ko specific values tak restrict kar sakte ho. Ye type safety ko badhata hai aur allowed values ko control karne mein madad karta hai.


let direction: "left" | "right" | "up" | "down"

direction="left" // vaild
// direction="back" // its not vaild because its not mention
// Yahan direction sirf "left", "right", "up", ya "down" ko accept karega. Iske alawa koi bhi value error degi.

type Status= "success" | "error" | "pending"

function printStatus(status:Status){
     console.log(`status is ${status}`);
     
}

printStatus("success")
printStatus("error")

type ButtunType="primary" | "secondry" | "danger"

function print1(lebel:string,type:ButtunType){
    console.log(`${lebel} is ${type}`);
    
}
print1("submit","primary")


type Users={
    name:string,
    age:number,
    skills:string[]
}

function Details(user:Users){
     console.log(` username is ${user.name} and skills ${user.skills}`);
     
}

const details={name:"amit",age:35,skills:["React","C++"]};
Details(details)
