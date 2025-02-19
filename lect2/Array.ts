// in this file all about Array in Ts with  practice

// 1. create the array of number type
let nums:number[]=[1,3,56]

// 2. Array of string type
let arr:string[]=["amit","ashish"]

// 3. array of Boolean type
let BoolArray:boolean[]=[true,false,false,true]

// medium leve 

// array with Array<Type>
let ab:Array<number>=[1,3,5]
let cb:Array<string>=["am","arg"]

// Array of mixtype
let mixArray:(number | string)[]=[1,3,4,"amf","d",1]

// array of obejct

interface Person{
    name:string,
    age:number
}

const people:Person[]=[
    {name:"amit",age:34},
    {name:"amit",age:34},
    {name:"amit",age:34}
]


// Array manupulation

let Users:string[]=["amit","ashish"]

// add new user
Users.push("uttam")
// after add
console.log("after add",Users);

// read value
console.log("read value",Users[0]);

Users.splice(0,1) 
console.log("after delete",Users);


// array of object management
interface Product{
    id:number,
    name:string,
    price:number
}

let product:Product[]=[
    {id:1,name:"face-wash",price:230},
    {id:2,name:"face-cream",price:400}
]

// add new product
product.push({id:3,name:"body-wash",price:239})
console.log("after the add product: ",product);

// find the product by id if id =2
for(let p1 of product){
  if(p1.id===2){
    console.log(p1);
    break
    
  }
}

// update price of the prodcut which id is 1
let mewproduct=product.map((p)=>
  p.id==1 ? {...p,price:345} : p 
)
console.log("updated price ",mewproduct);

// delete the prodct of their id will be 3

product=product.filter((p)=>p.id!=3)
console.log("after filter",product);

// split into another arry
function chunArray<T>(arr:T[],size:number):T[][]{
     let res:T[][]=[]
     for(let i=0;i<arr.length;i+=size){
         res.push(arr.slice(i,i+size))
     }
     return res;
}
console.log(chunArray<number>([1,2,3,4,5,5],2));
