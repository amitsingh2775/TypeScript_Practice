// Union TypeScript mein ek powerful feature hai jo aapko ek variable ko multiple types assign karne ki permission deta hai. Matlab, jab aapko ek variable ko different data types ke liye allow karna ho, toh aap Union Types ka use karte hain.

// ✅ Union Type ka Syntax:
// Union types ko | (pipe symbol) ke through define kiya jata hai.

//!Union Type Use Cases:
// Flexible Function Arguments: Jab aapko function arguments ko multiple types ke liye accept karna ho.
// Handling Different Data Types: Jab kisi value ka type dynamic ho sakta ho aur aapko us value ke multiple possible types ko handle karna ho.
// Handling Multiple Return Types: Jab ek function ko multiple types ka result return karna ho.
// Handling Optional or Missing Values: Jab kisi value ki presence ya absence ko handle karna ho (e.g., null or undefined).

let value:string | number
value="amit"
console.log(value);

function getAge(age:number | string):string{
    if(typeof age==="number"){
        return `age is ${age}`
    } 
    else{
        return `age is ${age} years`
    }
}
console.log(getAge(56))




