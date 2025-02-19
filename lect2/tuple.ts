// all about tuble

// simple how to declear tuble
// usecase->if you need to store the values of diferent types then you can use tupple
let users:[string,number]
users=["amit",39]
console.log(users);

// tuples with leble
let newUser:[id:number,name:string,status:boolean]
newUser=[1,"amit",true]
console.log(newUser);


// tuple in function which is return name and age

function getUsers():[string,number]{
  return ["ashish",45]
}
const [name1,age]=getUsers()
console.log(name1,age);

// tuple array

type Employee=[string,number]

let emp:Employee[]=[
    ["amit",345],
    ["sdg",45]
]
emp.forEach((val)=>console.log(val[0],val[1])
)

function swap<T,U>(a:T,b:U):[U,T]{
  return [b,a]
}
const[val1,val2]=swap(8,5)
console.log("val1->",val1,val2);
