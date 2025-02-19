// in this lecture i will cover Object,Array,Tupple,enum

//1. object
// use interface -> interface use for creating the object

interface ObjectType{
    name:string,
    age:number
}

function Print(newPerson:ObjectType){
     if(newPerson.name=="amit"){
        return newPerson.name
     }
     else{
        return "noting"
     }
}

const person={name:"ashish",age:26}
console.log(Print(person));

