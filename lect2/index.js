// in this lecture i will cover Object,Array,Tupple,enum
function Print(newPerson) {
    if (newPerson.name == "amit") {
        return newPerson.name;
    }
    else {
        return "noting";
    }
}
var person = { name: "ashish", age: 26 };
console.log(Print(person));
