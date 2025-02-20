// Generics TypeScript ka ek powerful feature hai jo aapko flexibility deta hai ki aap functions, classes, aur interfaces ke liye dynamic types ka use kar sakein. Iska matlab hai ki aap
//  ek hi code likh kar alag-alag types ke saath use kar sakte ho.

// Generics kyu use karte hain?
// Code reusability – Ek hi function ya class ko multiple types ke liye use kar sakte hain.
// Type safety – TypeScript aapki type galtiyon ko compile-time pe pakad leta hai.
// Flexibility – Aap alag-alag types ke liye same logic likh sakte ho bina code duplicate kiye.

function identify<T>(arg:T):T{
    return arg
}
console.log(identify<string>("dgfg"));
console.log(identify<number>(46));

// Explanation:
// T ek placeholder hai jo kisi bhi type ko represent karta hai.
// Jab function call karte hain, hum type pass karte hain (e.g., <number>, <string>).


//genric array function
// function reverse<T>(arg:T[]):T[]{
//     return arg.reverse()
// }
// console.log(reverse<number>([4,6,7,8,8]));
// console.log(reverse<string>(["ad","ertry","4g"]));

// // Generic Pair (Tuple) Return
// // Ek generic function banao jo do alag-alag types ka pair return kare.

// function Pair<T,U>(a:T,b:U):[T,U]{
//     return [a,b]
// }
// console.log(Pair<number,number>(7,8));
// console.log(Pair<string,number>("sdgf",5));

// // Generic Interface
// // Ek generic interface banao jo kisi bhi data type ka id aur value store kare.

// interface Data<T>{
//     value:T,
//     id:number
// }

// const p1:Data<string>={value:"sdg",id:2}
// console.log(p1);
// const p2:Data<number>={value:4565,id:5}
// console.log(p2);

// Generic Class
// Ek generic class banao jo stack ki tarah kaam kare.

class Stack<T>{
    private items:T[]=[]

    push(val:T):void{
        this.items.push(val)
    }
    pop():T | undefined{
        return this.items.pop()
    }
    display():void{
        console.log(this.items);
        
    }
}
const numberStack=new Stack<number>()
numberStack.push(5)
numberStack.push(7)
numberStack.push(9)
numberStack.display()
numberStack.pop()
numberStack.display()

const stringStack=new Stack<string>()
stringStack.push("a")
stringStack.push("b")
stringStack.push("c")
stringStack.display()
stringStack.pop()
stringStack.display()
