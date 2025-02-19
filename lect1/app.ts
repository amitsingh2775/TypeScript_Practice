
function sum(a:number,b:number,flag:boolean){
    if(flag){
        return a+b;
    }
    else{
        return "there is nothing"
    }
   
}

let a=4;
let b=9;
let flag=false;
console.log(sum(a,b,flag));
